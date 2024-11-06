const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

router.post('/about/reviews', async (req, res) => {
	const { firstName, lastName, review } = req.body;

	const newReview = new Review({ firstName, lastName, review });

	try {
		await newReview.save();
		res.status(201).json({ message: 'Відгук успішно надіслано!' });
	} catch (error) {
		res
			.status(500)
			.json({ message: 'Сталася помилка при збереженні відгуку.' });
	}
});

module.exports = router;
