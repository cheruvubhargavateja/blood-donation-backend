const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const apiRouter = require('./src/routes/router')
// const bodyParser = require('body-parser');

const port = process.env.PORT;
const db_url = process.env.DB_URL;

const app = express();

app.use(cors())

// app.use(bodyParser.json());

app.use(express.json());

app.use('/api', apiRouter);



mongoose.connect(db_url, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (error) => console.log(error));

db.once('open', () => console.log('Connected to mongoDb...'));


app.listen(port, () => console.log('Server is up and running in port:', port));