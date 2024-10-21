import React from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import ChangeProfileForm from '../components/ChangeProfileForm';

const ChangeProfile = () => {
	return (
		<div className="app-container">
			<Header />
			<ChangeProfileForm />
		</div>
	);
};

export default ChangeProfile;
