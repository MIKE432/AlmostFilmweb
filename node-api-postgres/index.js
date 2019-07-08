const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 9000
const db = require('./queries')

var cors = require("cors")

//app.use(bodyParser.text()) problem znajduje sie w odczytywaniu bo przesył jest okej;
app.use(bodyParser.json('type'))
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type"
    );
    next();
});

app.post('/users', db.createUser)
app.delete('/users/:id', db.deleteUser)
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)

app.get('/', (request, response) => {
    //response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
    console.log(`app running on port ${port}.`)
})