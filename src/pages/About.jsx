import React from 'react';
import Header from '../components/Header';
import '../styles/App.css';
import Info from '../components/Info';
import Reviews from '../components/Reviews';

const About = () => {
	return (
		<div className="app-container">
			<Header />
			<Info />
			<Reviews />
		</div>
	);
};

export default About;
