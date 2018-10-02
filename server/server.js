require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
app.use(bodyParser.json());


const {
    SERVER_PORT
} = process.env


const PORT = SERVER_PORT || 3010
app.listen(PORT, () => { console.log(`Listening on Port ${PORT}`) });
