const express = require('express');
const app = express();

const PORT = process.env.PORT;

const mongoose = require('mongoose');
require('dotenv').config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('Connected to MongoDB'));

app.get('/', function (req, res) {
	res.send('Hello');
});
app.listen(PORT);
