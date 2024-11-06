import React, { useState } from 'react';
import '../styles/styletattoo.css';
import Minimalism from '../resources/page1/card1.jpg';
import Realism from '../resources/page1/Realism.jpg';
import ColorTattoo from '../resources/page1/colortattoo.jpg';
import BlackAndWhite from '../resources/page1/blackand.jpg';
import Graphic from '../resources/page1/граф.jpg';
import Watercolor from '../resources/page1/акварель.jpg';
import ThreeD from '../resources/page1/3d.jpg';
import Microrealism from '../resources/page1/microrealism.jpg';

const tattooStylesData = [
	{
		title: 'Minimalism',
		img: Minimalism,
		description:
			'Татуювання в стилі мінімалізму привертає увагу своєю простотою та унікальністю.',
	},
	{
		title: 'Realism',
		img: Realism,
		description:
			'Реалістичні тату, створене майстром на основі оригінальної фотографії.',
	},
	{
		title: 'Color Tattoo',
		img: ColorTattoo,
		description:
			'Виразний стиль, який використовує повний спектр кольорової палитри.',
	},
	{
		title: 'Black and Gray',
		img: BlackAndWhite,
		description:
			'Чорно-сіре тату - це композиція чорного і сірого кольору з гладкими переходами і багатими деталями.',
	},
	{
		title: 'Graphic',
		img: Graphic,
		description:
			'Тату графіка поєднує простоту і елегантність, використовуючи чіткі контури, абстракцію та геометричні елементи.',
	},
	{
		title: '3D',
		img: ThreeD,
		description:
			'Завдяки використанню тіней і світла, 3D тату виглядають так, ніби вони виступають з поверхні шкіри.',
	},
	{
		title: 'Microrealism',
		img: Microrealism,
		description:
			'Мікрореалізм - це стиль татуювань, який характеризується надзвичайною деталізацією та малими розмірами.',
	},
	{
		title: 'Watercolor',
		img: Watercolor,
		description:
			'Татуювання в стилі акварелі з яскравими кольорами та розмитими краями.',
	},
];

const StyleTattoo = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = tattooStylesData.slice(
		indexOfFirstItem,
		indexOfLastItem
	);

	const totalPages = Math.ceil(tattooStylesData.length / itemsPerPage);

	const renderPageNumbers = () => {
		const pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<button
					key={i}
					className={currentPage === i ? 'active' : ''}
					onClick={() => setCurrentPage(i)}
				>
					{i}
				</button>
			);
		}
		return pageNumbers;
	};

	return (
		<div className="tattoo-styles">
			<h3>Стилі тату</h3>
			<div className="tattoo-row">
				{currentItems.map((style, index) => (
					<div className="tattoo-card" key={index}>
						<img src={style.img} alt={style.title} className="tattoo-image" />
						<h4>{style.title}</h4>
						<p>{style.description}</p>
					</div>
				))}
			</div>
			<div className="pagination">{renderPageNumbers()}</div>
		</div>
	);
};

export default StyleTattoo;
