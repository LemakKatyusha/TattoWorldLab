const express = require('express');
const bcrypt = require('bcrypt');
const Registration = require('../models/Registration');
const router = express.Router();

router.post('/registr/register', async (req, res) => {
	const { firstName, lastName, phoneNumber, email, password } = req.body;

	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const newRegistration = new Registration({
			firstName,
			lastName,
			phoneNumber,
			email,
			password: hashedPassword,
		});

		await newRegistration.save();
		res.status(201).json({ message: 'Користувача успішно зареєстровано!' });
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ message: 'Помилка при реєстрації користувача', error });
	}
});

module.exports = router;
