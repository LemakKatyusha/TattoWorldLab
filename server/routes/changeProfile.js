const express = require('express');
const ChangePhoto = require('../models/ChangePhoto');
const router = express.Router();

router.post('/change-profile', async (req, res) => {
	const { userId, firstName, phoneNumber, profilePhoto } = req.body;

	try {
		const user = await User.findById(userId);
		if (!user) {
			return res.status(404).json({ message: 'Користувач не знайдений' });
		}

		user.firstName = firstName;
		user.phoneNumber = phoneNumber;
		user.profilePhoto = profilePhoto;

		await user.save();
		res.status(200).json({ message: 'Профіль успішно оновлено!' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Сталася помилка при оновленні профілю' });
	}
});

module.exports = router;
