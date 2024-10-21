import React from 'react';
import '../styles/records.css';

const Record = () => {
	return (
		<div className="formrs">
			<p className="rectext">Для запису введіть свої дані.</p>
			<p className="rectext2">
				Адміністратор студії зателефонує Вам для уточнення інформації.
			</p>
			<div className="name-surnamers">
				<input type="text" className="inputttrs" placeholder="Ім'я" />
				<input type="text" className="inputttrs" placeholder="Прізвище" />
			</div>
			<input type="tel" className="inputrs" placeholder="Номер телефону" />
			<div className="submit-containerrs">
				<button className="submitrs">Надіслати</button>
			</div>
		</div>
	);
};

export default Record;
