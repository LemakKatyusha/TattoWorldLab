import React, { useState } from 'react';
import '../styles/changeprofileform.css';

const ChangeProfileForm = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [photo, setPhoto] = useState(null);
	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!name || !phone) {
			setMessage('Будь ласка, заповніть всі поля.');
			setShowMessage(true);
			setTimeout(() => setShowMessage(false), 3000);
			return;
		}

		const phoneRegex = /^[0-9]{10}$/;
		if (!phoneRegex.test(phone)) {
			setMessage('Невірний формат номера телефону');
			setShowMessage(true);
			setTimeout(() => setShowMessage(false), 3000);
			return;
		}

		try {
			const formData = new FormData();
			formData.append('name', name);
			formData.append('phone', phone);
			if (photo) formData.append('photo', photo);

			const response = await fetch('http://localhost:3001/change-profile', {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				setMessage('Ваш профіль успішно змінено');
				setShowMessage(true);
				setTimeout(() => setShowMessage(false), 3000);
			} else {
				const errorData = await response.json();
				setMessage(errorData.message || 'Сталася помилка при зміні профілю');
				setShowMessage(true);
				setTimeout(() => setShowMessage(false), 3000);
			}
		} catch (error) {
			console.error('Error:', error);
			setMessage('Сталася помилка при зміні профілю');
			setShowMessage(true);
			setTimeout(() => setShowMessage(false), 3000);
		}
	};

	const handlePhotoChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setPhoto(file);
		}
	};

	return (
		<div className="form">
			{showMessage && <div className="popup-message">{message}</div>}

			<div className="imgchange">
				<div className="image">
					<img
						src="https://i.pinimg.com/474x/a0/4d/84/a04d849cf591c2f980548b982f461401.jpg"
						alt="Profile"
						className="profile-img"
					/>
				</div>
				<label className="changephoto" htmlFor="photo-upload">
					Встановити нове фото
				</label>
				<input
					type="file"
					id="photo-upload"
					className="photo-input"
					accept="image/*"
					onChange={handlePhotoChange}
				/>
			</div>

			<input
				type="text"
				className="input"
				placeholder="Ім'я"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<input
				type="tel"
				className="input"
				placeholder="Номер телефону"
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
			/>

			<div className="saveexit">
				<button className="save" onClick={handleSubmit}>
					Зберегти
				</button>
			</div>

			<button className="exit">Вийти</button>
		</div>
	);
};

export default ChangeProfileForm;
