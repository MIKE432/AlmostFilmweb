var express = require('express')
var router = express.Route()

router.get("/", (req, res) => {
    res.send("api is working properly")
})