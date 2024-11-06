import React from 'react';
import Header from '../components/Header';
import '../styles/App.css';
import MainImageAbout from '../components/MainImageAbout';
import Stages from '../components/Stages';
import Service from '../components/Service';
import Record from '../components/RecordServices';

const Services = () => {
	return (
		<div className="app-container">
			<Header />
			<MainImageAbout />
			<Stages />
			<Service />
			<Record />
		</div>
	);
};

export default Services;
