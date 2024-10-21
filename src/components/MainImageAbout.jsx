import React from 'react';
import '../styles/mainimage.css';
import backgroundImage from '../resources/page1/photo_2023-11-23_14-13-43.jpg';

const MainImage = () => {
	return (
		<section
			className="main1"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className="wrapper">
				<div className="maintext">
					<h1>
						Від класичних дизайнів до креативних та експериментальних проектів —
						ми готові втілити вашу мрію про ідеальне тату
					</h1>
				</div>
			</div>
		</section>
	);
};

export default MainImage;
