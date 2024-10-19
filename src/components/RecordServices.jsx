import React from 'react';
import '../styles/records.css';

const Record = () => {
	return (
		<div className="form">
			<p className="rectext">Для запису введіть свої дані.</p>
			<p className="rectext2">
				Адміністратор студії зателефонує Вам для уточнення інформації.
			</p>
			<div className="name-surname">
				<input type="text" className="inputtt" placeholder="Ім'я" />
				<input type="text" className="inputtt" placeholder="Прізвище" />
			</div>
			<input type="tel" className="input" placeholder="Номер телефону" />
			<div className="submit-container">
				<button className="submit">Надіслати</button>
			</div>
		</div>
	);
};

export default Record;
