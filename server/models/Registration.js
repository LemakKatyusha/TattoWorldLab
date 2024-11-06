const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

const Registration = mongoose.model('Registration', RegistrationSchema);
module.exports = Registration;
