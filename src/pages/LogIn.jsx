import React from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const LogIn = () => {
	return (
		<div className="app-container">
			<Header />
			<LoginForm />
		</div>
	);
};

export default LogIn;
