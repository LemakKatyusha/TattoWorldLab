import React from 'react';
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
							<img className="logo" src={logo} alt="Логотип" />
						</div>
						<nav className="navbar">
							<ul className="list">
								<li>
									<a href="about.html">Про нас</a>
								</li>
								<li>
									<a href="services.html">Наші послуги</a>
								</li>
								<li>
									<a href="profile.html">
										<img
											className="profile-icon"
											src={profileIcon}
											alt="Профіль"
										/>
									</a>
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
