const express = require('express');
const Record = require('../models/Record');
const router = express.Router();

router.post('/services/records', async (req, res) => {
	const { firstName, lastName, phoneNumber } = req.body;

	const newRecord = new Record({ firstName, lastName, phoneNumber });

	try {
		await newRecord.save();
		res.status(201).json({ message: 'Запис успішно надіслано!' });
	} catch (error) {
		res.status(500).json({ message: 'Сталася помилка при збереженні запису.' });
	}
});

module.exports = router;
