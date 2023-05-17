const express = require("express");
const app = express();
const cors = require("cors");
const incident_router = require("./routes/incidents")

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use('/api', incident_router);

module.exports = app;