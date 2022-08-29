const express = require('express')
const taskRoute = require('./task-routes')
const cors = require("cors");
const bodyParser = require("body-parser");

function createServer() {
    const app = express()
    app.use(express.json())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cors())

    app.use(taskRoute);

    return app;
}

module.exports = createServer