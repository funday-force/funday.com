require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');

const nodemailer = require('nodemailer');
const creds = require('./creds');

const authCtrl = require('./auth-controller');
const userCtrl = require('./users-controller');
const teamCtrl = require('./team-controller');
const messagesCtrl = require('./messages-controller');
const boardsCtrl = require('./boards-controller');
const tablesCtrl = require('./tables-controller');
const rowsCtrl = require('./rows-controller');

// Init epxress app
const app = express();

// Destructure from .env
const { SERVER_PORT, CONNECTION_STRING, SECRET, NODE_ENV } = process.env;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/send-email', function(req, res) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  });

  let content = `Thanks for signing up to Funday.com! You are now ready to invite members to your team. Sign in to the dashboard on Funday.com and send your team members an invite.`;

  let mailOptions = {
    from: creds.USER, // sender address
    to: 'hunterluker1992@gmail.com', // list of receivers
    subject: 'Welcome to Funday.com', // Subject line
    html: `<h2 style="background: #0e0520; color: white; padding: 10px; border: 3px solid #45336b; text-align: center">${content}</h2>` // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    console.log('Message %s sent: %s', info.messageId, info.response);
    res.redirect('http://localhost:3000/#/dashboard');
  });
});

app.post('/add-member', function(req, res) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  });

  const link = `<a href="http://localhost:3000/#/dashboard">Funday.com</a>`;
  let content = `You have been invited to join Funday.com go to this link to join your team ${link}`;

  let mailOptions = {
    from: creds.USER, // sender address
    to: 'hunterluker1992@gmail.com', // list of receivers
    subject: 'Welcome to Funday.com', // Subject line
    html: `<h2 style="background: #0e0520; color: white; padding: 10px; border: 3px solid #45336b; text-align: center">${content}</h2>` // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    console.log('Message %s sent: %s', info.messageId, info.response);
    res.redirect('http://localhost:3000/#/dashboard');
  });
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

// database connection
massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('Connected to DB');
});

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

// AUTH ENDPOINTS

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

// BOARDS ENDPOINTS
app.get('/api/boards', boardsCtrl.getBoards);

app.post('/api/boards', boardsCtrl.createBoard);

app.delete('/api/boards/:id', boardsCtrl.deleteBoard);

app.put('/api/boards/:id', boardsCtrl.updateBoard);

// TABLES ENDPOINTS
app.get('/api/tables', tablesCtrl.getTables);

app.post('/api/tables', tablesCtrl.createTable);

app.delete('/api/tables/:id', tablesCtrl.deleteTable);

app.put('/api/tables/:id', tablesCtrl.updateTable);

// ROWS ENDPOINTS
app.get('/api/rows', rowsCtrl.getRows);

app.post('/api/rows', rowsCtrl.createRow);

app.delete('/api/rows/:id', rowsCtrl.deleteRow);

app.put('/api/rows/:id', rowsCtrl.updateRow);

// LISTEN ON PORT
app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`));
