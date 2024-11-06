import React, { useState } from 'react';
import '../styles/records.css';

const Record = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [showMessage, setShowMessage] = useState(false);
	const [errorMessages, setErrorMessages] = useState('');

	const validateForm = () => {
		const newErrors = [];

		if (!firstName) newErrors.push("Заповніть поле Ім'я");
		if (!lastName) newErrors.push('Заповніть поле Прізвище');
		if (!phoneNumber) {
			newErrors.push('Заповніть поле Номер телефону');
		} else if (!/^[0-9]{10}$/.test(phoneNumber)) {
			newErrors.push('Номер телефону має містити 10 цифр');
		}

		setErrorMessages(newErrors.join(', '));
		return newErrors.length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			setShowMessage(true);
			setTimeout(() => setShowMessage(false), 3000);
			return;
		}

		try {
			const response = await fetch('http://localhost:3001/services/records', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ firstName, lastName, phoneNumber }),
			});

			if (response.ok) {
				const data = await response.json();
				setShowMessage(true);
				setFirstName('');
				setLastName('');
				setPhoneNumber('');
				setErrorMessages('');

				setTimeout(() => setShowMessage(false), 3000);
			} else {
				alert('Сталася помилка при надсиланні запису');
			}
		} catch (error) {
			alert('Сталася помилка: ' + error.message);
		}
	};

	return (
		<div className="formrs">
			{showMessage && (
				<div className="popup-message">
					{errorMessages || 'Запис успішно надіслано!'}
				</div>
			)}

			<p className="rectext">Для запису введіть свої дані.</p>
			<p className="rectext2">
				Адміністратор студії зателефонує Вам для уточнення інформації.
			</p>
			<form onSubmit={handleSubmit}>
				<div className="name-surnamers">
					<input
						type="text"
						className="inputttrs"
						placeholder="Ім'я"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<input
						type="text"
						className="inputttrs"
						placeholder="Прізвище"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<input
					type="tel"
					className="inputrs"
					placeholder="Номер телефону"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
				/>
				<div className="submit-containerrs">
					<button className="submitrs">Надіслати</button>
				</div>
			</form>
		</div>
	);
};

export default Record;
