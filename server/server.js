require("dotenv").config();
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const massive = require("massive");
const axios = require("axios");

const userCtrl = require("./users-controller");
const teamCtrl = require("./team-controller");
const messagesCtrl = require("./messages-controller");

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
  app.set("db", db);
  console.log("Connected to DB");
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
    grant_type: "authorization_code",
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
  console.log("user data", resWithUserData.data);

  let {
    name,
    email,
    phone,
    location,
    title,
    picture,
    sub
  } = resWithUserData.data;

  const db = req.app.get("db");
  let foundUser = await db.find_user([sub]);

  if (foundUser[0]) {
    req.session.user = foundUser[0];
    res.redirect("/#/dashboard");
  } else {
    let createdUser = await db.create_user([
      name,
      email,
      phone,
      location,
      title,
      picture,
      sub
    ]);
    req.session.user = createdUser[0];

    res.redirect("/#/dashboard");
  }
});

function envCheck(req, res, next) {
  if (NODE_ENV === "dev") {
    req.app
      .get("db")
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
    res.status(401).send("NOOOO!!");
  }
});

app.get("/auth/logout", (req, res) => {
  req.session.destroy();

  res.redirect("http://localhost:3000/");
});

// USER ENDPOINTS
app.get("/api/users", userCtrl.getUsers);

app.delete("/api/users/:id", userCtrl.removeUser);

app.put("/api/users/:id", userCtrl.updateUser);

// TEAM ENPOINTS
app.get("/api/team", teamCtrl.getTeam);

app.post("/api/team", teamCtrl.addTeamMember);

app.delete("/api/team/:id", teamCtrl.removeMember);

// MESSAGES ENDPOINTS
app.get("/api/messages", messagesCtrl.getMessages);

app.post("/api/messages", messagesCtrl.createMessage);

app.delete("/api/messages/:id", messagesCtrl.deleteMessage);

app.put("/api/messages/:id", messagesCtrl.updateMessage);

// Listen on a port
app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`));
