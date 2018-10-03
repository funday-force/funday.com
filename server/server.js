require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');

// Init epxress app
const app = express();

// Destructure from .env
const {
  SERVER_PORT,
  CONNECTION_STRING,
  SECRET,
  REACT_APP_CLIENT_ID,
  CLIENT_SECRET,
  REACT_APP_DOMAIN,
  NODE_ENV
} = process.env;

// database connection
massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('Connected to DB');
});

// Middleware
app.use(bodyParser.json());
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
  })
);

// endpoints
app.get(`/auth/callback`, async (req, res) => {
  // use code from query in payload for token
  const payload = {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code,
    grant_type: 'authorization_code',
    redirect_uri: `http://${req.headers.host}/auth/callback`
  };

  // trade code for token
  let resWithToken = await axios.post(
    `https://${REACT_APP_DOMAIN}/oauth/token`,
    payload
  );

  // use token to get user data
  let resWithUserData = await axios.get(
    `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
      resWithToken.data.access_token
    }`
  );
  console.log('user data', resWithUserData.data);

  let { email, name, picture, sub } = resWithUserData.data;

  res.redirect('/#/navbar');

  // const db = req.app.get('db');
  // let foundUser = await db.find_user([sub]);

  // if (foundUser[0]) {
  //   req.session.user = foundUser[0];
  //   res.redirect('/#/navbar');
  // } else {
  //   let createdUser = await db.create_user([name, email, picture, sub]);
  //   req.session.user = createdUser[0];

  //   res.redirect('/#/navbar');
  // }
});

function envCheck(req, res, next) {
  if (NODE_ENV === 'dev') {
    req.app
      .get('db')
      .get_user_by_id()
      .then(userWithIdOne => {
        req.session.user = userWithIdOne[0];
        next();
      });
  } else {
    next();
  }
}

app.get(`/api/user-data`, envCheck, (req, res) => {
  if (req.session.user) {
    res.status(200).send(req.session.user);
  } else {
    res.status(401).send('NOOOO!!');
  }
});

app.get('/auth/logout', (req, res) => {
  req.session.destroy();

  res.redirect('http://localhost:3000/');
});

// Listen on a port
app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`));
