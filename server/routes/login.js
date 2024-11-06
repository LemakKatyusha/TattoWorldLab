const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/Registration');
const router = express.Router();

router.post('/login', async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: 'Користувача не знайдено' });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(401).json({ message: 'Невірний пароль' });
		}

		res.status(200).json({ message: 'Успішний вхід', user });
	} catch (error) {
		res.status(500).json({ message: 'Помилка при вході' });
	}
});

module.exports = router;
