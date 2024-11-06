import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/registrform.css';

const RegistrationForm = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const validateForm = () => {
		const newErrors = [];

		if (!firstName) newErrors.push("Заповніть поле Ім'я");
		if (!lastName) newErrors.push('Заповніть поле Прізвище');
		if (!phoneNumber) newErrors.push('Заповніть поле Номер телефону');
		if (!email) newErrors.push('Заповніть поле Електронна пошта');
		if (!password) newErrors.push('Заповніть поле Пароль');

		const phoneRegex = /^[0-9]{10}$/;
		if (phoneNumber && !phoneRegex.test(phoneNumber)) {
			newErrors.push('Номер телефону має містити 10 цифр');
		}

		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (email && !emailRegex.test(email)) {
			newErrors.push('Невірний формат електронної пошти');
		}

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
			setTimeout(() => setShowMessage(false), 5000);
			return;
		}

		try {
			const response = await fetch('http://localhost:3001/registr/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					firstName,
					lastName,
					phoneNumber,
					email,
					password,
				}),
			});

			if (response.ok) {
				setMessage('Користувача успішно зареєстровано!');
				setShowMessage(true);
				setTimeout(() => setShowMessage(false), 3000);
				navigate('/login');
			} else {
				const errorData = await response.json();
				setMessage(` ${errorData.message}`);
				setShowMessage(true);
				setTimeout(() => setShowMessage(false), 3000);
			}
		} catch (error) {
			console.error('Error:', error);
			setMessage('Сталася помилка при реєстрації');
			setShowMessage(true);
			setTimeout(() => setShowMessage(false), 3000);
		}
	};

	return (
		<div className="contentreg">
			{showMessage && <div className="popup-message">{message}</div>}

			<form className="modreg" onSubmit={handleSubmit}>
				<h2>Реєстрація</h2>
				<div className="inputtreg">
					<input
						type="text"
						placeholder="Ім'я"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div className="inputtreg">
					<input
						type="text"
						placeholder="Прізвище"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div className="inputtreg">
					<input
						type="tel"
						placeholder="Номер телефону"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				</div>
				<div className="inputtreg">
					<input
						type="email"
						placeholder="Електронна пошта"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="inputtreg">
					<input
						type="password"
						placeholder="Пароль"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit" className="submit-btnreg">
					Створити
				</button>
				<hr className="hrreg"></hr>
				<p>
					Вже маєте акаунт?
					<Link to="/login" className="login">
						Увійти
					</Link>
				</p>
			</form>
		</div>
	);
};

export default RegistrationForm;
