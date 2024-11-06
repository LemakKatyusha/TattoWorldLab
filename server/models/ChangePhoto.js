const mongoose = require('mongoose');

const changePhotoSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	profilePhoto: { type: String, default: null },
	phoneNumber: { type: String, required: true },
});

const ChangePhoto = mongoose.model('ChangePhoto', changePhotoSchema);

module.exports = ChangePhoto;
