const express = require("express");
const app = express();
const incident_router = require("./routes/incidents")

app.use(express.json());
app.use(express.urlencoded({extended: true}));

module.exports = app;

app.use('/api', incident_router);