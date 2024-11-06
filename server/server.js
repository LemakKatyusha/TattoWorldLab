const express = require('express');
const bodyParser = require('body-parser');
const recordsRoute = require('./routes/records');
const reviewsRoute = require('./routes/reviews');
const registrationsRoute = require('./routes/registrations');
const loginRoute = require('./routes/login');
const changeProfileRoute = require('./routes/changeProfile');

const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3001;

const mongoose = require('mongoose');
require('dotenv').config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('Connected to MongoDB'));
app.use(cors());
app.use(express.json());
app.use(reviewsRoute);
app.use(recordsRoute);
app.use(registrationsRoute);
app.use(loginRoute);
app.use(changeProfileRoute);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
