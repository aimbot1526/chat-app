const express = require('express');
const app = express();
const mongoose = require('mongoose');
const index = require('./routes/index');
const port = 5000;
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbUrl = process.env.ATLAS_URL;
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => { console.log('Database connection established successfully.') });

app.use('/', index);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});