import React from 'react';
import '../styles/loginform.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
	return (
		<div className="contentlog">
			<form className="modlog">
				<h2>Вхід</h2>
				<div className="inputtlog">
					<input type="e-mail" placeholder="Електронна пошта" />
				</div>
				<div className="inputtlog">
					<input type="text" placeholder="Пароль" />
				</div>
				<button className="submit-btnlog">Увійти </button>
				<hr className="hrlog"></hr>
				<Link to="/change" className="login">
					Зареєструватись
				</Link>
			</form>
		</div>
	);
};

export default LoginForm;
