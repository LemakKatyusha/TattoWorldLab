import React from 'react';
import Header from '../components/Header';
import '../styles/App.css';
import MainImage from '../components/MainImage';
import WhyChoose from '../components/WhyChoose';
import StyleTattoo from '../components/StyleTattoo';

const Page1 = () => {
	return (
		<div className="app-container">
			<Header />
			<MainImage />
			<WhyChoose />
			<StyleTattoo />
		</div>
	);
};

export default Page1;
