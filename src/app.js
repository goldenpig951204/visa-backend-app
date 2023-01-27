const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');
const { connect, seedDB } = require("./services/database");

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

connect("mongodb://localhost:27017");
seedDB();

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
