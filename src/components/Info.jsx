import React from 'react';
import '../styles/info.css';

const Info = () => {
	return (
		<div className="contact">
			<h2>Де нас знайти?</h2>

			<p className="welcome">
				Ласкаво просимо до нашого тату-салону в Ужгороді! Ми знаходимося у
				зручному місці, яке легко знайти та відвідати.
			</p>

			<div className="contacts">
				<p>
					<strong>Наша адреса:</strong> м. Ужгород, вул. Заньковецької 89
				</p>
				<p>
					<strong>Номер телефону:</strong> +380682497814
				</p>
				<p>
					<strong>Електронна пошта:</strong> lemak.kateryna@student.uzhnu.edu.ua
				</p>
			</div>

			<div className="work">
				<p>
					<strong>Робочі години:</strong>
				</p>
				<p>Понеділок-П’ятниця: 9.00-18.00</p>
				<p>Субота-Неділя: Вихідний</p>
			</div>
			<hr className="hrmain" />
		</div>
	);
};

export default Info;
