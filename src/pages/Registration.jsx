import React from 'react';
import Header from '../components/Header';
import '../styles/App.css';
import RegistrationForm from '../components/RegistrationForm';

const FormRegistr = () => {
	return (
		<div className="app-container">
			<Header />
			<RegistrationForm />
		</div>
	);
};

export default FormRegistr;
