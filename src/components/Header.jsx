import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import logo from '../resources/page1/Exclude (2) 1.svg';
import profileIcon from '../resources/page1/Group 1.svg';

const Header = () => {
	return (
		<div className="wrapper">
			<section className="wrapp">
				<div className="wrapcontainer">
					<header className="head">
						<div className="headerlogo">
							<Link to="/page1">
								<img className="logo" src={logo} alt="Логотип" />
							</Link>
						</div>
						<nav className="navbar">
							<ul className="list">
								<li>
									<Link to="/services">Наші послуги</Link>{' '}
								</li>
								<li>
									<Link to="/about">Про нас</Link>
								</li>
								<li>
									<Link to="/registr">
										<img
											className="profile-icon"
											src={profileIcon}
											alt="Профіль"
										/>
									</Link>
								</li>
							</ul>
						</nav>
					</header>
				</div>
			</section>
		</div>
	);
};

export default Header;
