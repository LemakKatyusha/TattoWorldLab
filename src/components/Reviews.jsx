import React, { useState } from 'react';
import '../styles/review.css';

const Reviews = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [review, setReview] = useState('');
	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState('');

	const validateForm = () => {
		const newErrors = [];

		if (!firstName) newErrors.push("Заповніть поле Ім'я");
		if (!lastName) newErrors.push('Заповніть поле Прізвище');
		if (!review) newErrors.push('Заповніть поле Відгук');

		if (newErrors.length > 0) {
			setMessage(newErrors.join(', '));
			return false;
		}

		return true;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			setShowMessage(true);
			setTimeout(() => setShowMessage(false), 3000);
			return;
		}

		try {
			const response = await fetch('http://localhost:3001/about/reviews', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ firstName, lastName, review }),
			});

			if (response.ok) {
				setMessage('Відгук успішно надіслано!');
				setShowMessage(true);
				setFirstName('');
				setLastName('');
				setReview('');
				setTimeout(() => setShowMessage(false), 3000);
			} else {
				alert('Сталася помилка при надсиланні відгуку');
			}
		} catch (error) {
			alert('Сталася помилка: ' + error.message);
		}
	};

	return (
		<div className="contentr">
			{showMessage && <div className="popup-message">{message}</div>}

			<form className="modr" onSubmit={handleSubmit}>
				<h1>
					Ваша думка важлива! Поділіться своїм досвідом у нашому тату-салоні.
				</h1>
				<p className="pr">
					Щоб залишити відгук, будь ласка, увійдіть у свій акаунт або
					зареєструйтесь.
				</p>
				<div className="inputtr">
					<input
						type="text"
						placeholder="Ім'я"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div className="inputtr">
					<input
						type="text"
						placeholder="Прізвище"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div className="inputtr">
					<textarea
						placeholder="Залишити відгук"
						value={review}
						onChange={(e) => setReview(e.target.value)}
					></textarea>
				</div>
				<div className="submit-containerr">
					<button className="submitr">Надіслати</button>
				</div>
			</form>
		</div>
	);
};

export default Reviews;
