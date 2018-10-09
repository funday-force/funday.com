require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');

const userCtrl = require('./users-controller');
const teamCtrl = require('./team-controller');
const messagesCtrl = require('./messages-controller');
const authCtrl = require('./auth-controller');

// Init epxress app
const app = express();

// Destructure from .env
const { SERVER_PORT, CONNECTION_STRING, SECRET, NODE_ENV } = process.env;

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

// AUTH ENDPOINTS
app.get(`/auth/callback`, authCtrl.login);

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

app.get(`/api/user-data`, envCheck, authCtrl.userData);

app.get('/auth/logout', authCtrl.logout);

// USER ENDPOINTS
app.get('/api/users', userCtrl.getUsers);

app.delete('/api/users/:id', userCtrl.removeUser);

app.put('/api/users/:id', userCtrl.updateUser);

// TEAM ENPOINTS
app.get('/api/team', teamCtrl.getTeam);

app.post('/api/team', teamCtrl.addTeamMember);

app.delete('/api/team/:id', teamCtrl.removeMember);

// MESSAGES ENDPOINTS
app.get('/api/messages', messagesCtrl.getMessages);

app.post('/api/messages', messagesCtrl.createMessage);

app.delete('/api/messages/:id', messagesCtrl.deleteMessage);

app.put('/api/messages/:id', messagesCtrl.updateMessage);

// Listen on a port
app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`));
