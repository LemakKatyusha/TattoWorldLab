const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	review: { type: String, required: true },
});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
