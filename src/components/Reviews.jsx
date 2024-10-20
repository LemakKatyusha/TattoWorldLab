import React from 'react';
import '../styles/review.css';

const Reviews = () => {
	return (
		<div className="content">
			<form className="mod">
				<div className="inputt">
					<input type="text" placeholder="Ім'я" />
				</div>
				<div className="inputt">
					<input type="text" placeholder="Прізвище" />
				</div>
				<div className="inputt">
					<textarea required placeholder="Залишити відгук"></textarea>
				</div>
				<button className="submit-btn">Надіслати</button>
			</form>
		</div>
	);
};

export default Reviews;
