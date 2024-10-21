import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Page1';
import Services from './pages/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import About from './pages/About';
import Registration from './pages/Registration';
import LogIn from './pages/LogIn';
import ChangeProfile from './pages/ChangeProfile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/page1" element={<Page1 />} />{' '}
				<Route path="/" element={<App />} />{' '}
				<Route path="/services" element={<Services />} />{' '}
				<Route path="/about" element={<About />} />{' '}
				<Route path="/registr" element={<Registration />} />{' '}
				<Route path="/login" element={<LogIn />} />{' '}
				<Route path="/change" element={<ChangeProfile />} />{' '}
			</Routes>
		</Router>
	</React.StrictMode>
);
