const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	phoneNumber: { type: String, required: true },
});

const Record = mongoose.model('Record', RecordSchema);
module.exports = Record;
