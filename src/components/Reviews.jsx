import React from 'react';
import '../styles/review.css';

const Reviews = () => {
	return (
		<div className="contentr">
			<form className="modr">
				<h1>
					Ваша думка важлива! Поділіться своїм досвідом у нашому тату-салоні.
				</h1>
				<p className="pr">
					Щоб залишити відгук, будь ласка, увійдіть у свій акаунт або
					зареєструйтесь.
				</p>
				<div className="inputtr">
					<input type="text" placeholder="Ім'я" />
				</div>
				<div className="inputtr">
					<input type="text" placeholder="Прізвище" />
				</div>
				<div className="inputtr">
					<textarea required placeholder="Залишити відгук"></textarea>
				</div>
				<div className="submit-containerr">
					<button className="submitr">Надіслати</button>
				</div>
			</form>
		</div>
	);
};

export default Reviews;
