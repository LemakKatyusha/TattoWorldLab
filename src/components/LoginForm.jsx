import React, { useState } from 'react';
import '../styles/loginform.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('http://localhost:3001/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.ok) {
				const userData = await response.json();
				localStorage.setItem('token', userData.token);
				setMessage('Вітаємо! Ви успішно увійшли.');
				setShowMessage(true);
				setTimeout(() => setShowMessage(false), 3000);
				navigate('/');
			} else {
				const errorData = await response.json();
				setMessage(errorData.message || 'Сталася помилка при вході');
				setShowMessage(true);
				setTimeout(() => setShowMessage(false), 3000);
			}
		} catch (error) {
			console.error('Error:', error);
			setMessage('Сталася помилка при вході');
			setShowMessage(true);
			setTimeout(() => setShowMessage(false), 3000);
		}
	};

	return (
		<div className="contentlog">
			{showMessage && <div className="popup-message">{message}</div>}

			<form className="modlog" onSubmit={handleSubmit}>
				<h2>Вхід</h2>
				<div className="inputtlog">
					<input
						type="email"
						placeholder="Електронна пошта"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="inputtlog">
					<input
						type="password"
						placeholder="Пароль"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button className="submit-btnlog" type="submit">
					Увійти
				</button>
				<hr className="hrlog" />
				<Link to="/change" className="login">
					Змінити профіль
				</Link>
			</form>
		</div>
	);
};

export default LoginForm;
