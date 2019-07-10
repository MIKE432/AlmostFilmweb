const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 9000
const db = require('./queries/userRouter/userQueries')
const router = require('./queries/userRouter/router')

var cors = require("cors")

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

router.router(app, db);


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
    console.log(`app running on port ${port}.`)
})