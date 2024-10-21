import React from 'react';
import '../styles/registrform.css';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
	return (
		<div className="contentreg">
			<form className="modreg">
				<h2>Реєстрація</h2>
				<div className="inputtreg">
					<input type="text" placeholder="Ім'я" />
				</div>
				<div className="inputtreg">
					<input type="text" placeholder="Прізвище" />
				</div>
				<div className="inputtreg">
					<input type="tel" placeholder="Номер телефону" />
				</div>
				<div className="inputtreg">
					<input type="e-mail" placeholder="Електронна пошта" />
				</div>
				<div className="inputtreg">
					<input type="text" placeholder="Пароль" />
				</div>
				<button className="submit-btnreg">Створити </button>
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
