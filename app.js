const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const morgan = require('morgan');
const chalk  =require('chalk');

const app = express();
const Port = process.env.Port;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
    res.send('hello world 3');
});
 
app.listen(Port, ()=> {
    debug("listenning on Port " + chalk.green(Port));
});