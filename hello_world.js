const http = require("http"),
    fs = require("fs"); //file server
const express = require('express')
const app = express();
const port = 3456;
/*const file = "client.html";
const cssfile = "client.css";

/*const server = http.createServer(function (req, res) {
    res.send('Hello World!');
})*/

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})