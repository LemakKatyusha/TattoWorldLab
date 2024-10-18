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
						Ласкаво просимо в наш тату-салон, де шкіра стає полотном, а
						творчість не має меж
					</h1>
					<hr className="hrmain" />
					<p className="maintextp">
						Там, де мистецтво зустрічається зі шкірою, історії оживають
					</p>
				</div>
			</div>
		</section>
	);
};

export default MainImage;
