const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
    res.send('hello world');
});
 
app.listen(port, ()=> {
    console.log("listenning on port %d", port);
});