import React from 'react';
import '../styles/styletattoo.css';
import Minimalism from '../resources/page1/card1.jpg';
import Realism from '../resources/page1/Realism.jpg';
import ColorTattoo from '../resources/page1/colortattoo.jpg';
import BlackAndWhite from '../resources/page1/blackand.jpg';

const StyleTattoo = () => (
	<div className="tattoo-styles">
		<h3>Стилі тату</h3>
		<div className="tattoo-row">
			<div className="tattoo-card">
				<img src={Minimalism} alt="Minimalism" className="tattoo-image" />
				<h4>Minimalism</h4>
				<p>
					Татуювання в стилі мінімалізму привертає увагу своєю простотою та
					унікальністю.
				</p>
			</div>
			<div className="tattoo-card">
				<img src={Realism} alt="Realism" className="tattoo-image" />
				<h4>Realism</h4>
				<p>
					Реалістичні тату, створене майстром на основі оригінальної фотографії.
				</p>
			</div>
		</div>
		<div className="tattoo-row">
			<div className="tattoo-card">
				<img src={ColorTattoo} alt="Color Tattoo" className="tattoo-image" />
				<h4>Color Tattoo</h4>
				<p>
					Виразний стиль, який використовує повний спектр кольорової палитри.
				</p>
			</div>
			<div className="tattoo-card">
				<img
					src={BlackAndWhite}
					alt="Black and Gray"
					className="tattoo-image"
				/>
				<h4>Black and Gray</h4>
				<p>
					Чорно-сіре тату - це композиція чорного і сірого кольору з гладкими
					переходами і багатими деталями.
				</p>
			</div>
		</div>
	</div>
);

export default StyleTattoo;
