const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));


const port = process.env.PORT || 8000;


app.get('/', (req, res) => {
    res.send(`Hello world from the server app.js`);
});

app.get('/about', (req, res) => {
    console.log(`Hello my About`);
    res.send(`Hello About world from the server`);
});

app.post('/contact', (req, res) => {
    res.send(`Hello Contact world from the server`);
});

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});


