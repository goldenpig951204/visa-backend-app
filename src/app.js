const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');
const { connect, seedDB } = require("./services/database");

const app = express();

app.set("view engine", "ejs");
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(express.static(__dirname + "/views"));
connect("mongodb://localhost:27017");
seedDB();

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
