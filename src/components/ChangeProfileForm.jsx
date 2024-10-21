import React from 'react';
import '../styles/changeprofileform.css';

const ChangeProfileForm = () => {
	return (
		<div className="form">
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
				/>
			</div>
			<input type="text" className="input" placeholder="Прізвище" />
			<input type="tel" className="input" placeholder="Номер телефону" />
			<div className="saveexit">
				<button className="save"> Зберегти</button>
			</div>
			<button className="exit"> Вийти</button>
		</div>
	);
};

export default ChangeProfileForm;
