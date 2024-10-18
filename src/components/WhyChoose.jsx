import React from 'react';
import '../styles/whychoose.css';
import iconDiamond from '../resources/page1/icon-diamond 1.svg';
import icon2 from '../resources/page1/icon2.svg';
import icon3 from '../resources/page1/icon3.svg';
import icon4 from '../resources/page1/icon4.svg';

const WhyChoose = () => {
	return (
		<div className="wrapper">
			<section className="main2">
				<div className="why">
					<h2>Чому варто обрати нас?</h2>
					<div className="whyall">
						<div className="whyall1">
							<div className="imgwhy">
								<img src={iconDiamond} alt="" />
							</div>
							<div className="whyalltext">
								<p className="whyallp">Професійність та безпека</p>
								<p className="whyallp1">
									Ми дотримуємося найвищих стандартів безпеки та гігієни, щоб
									ваш досвід створення татуювань був комфортним і безпечним.
								</p>
							</div>
						</div>
						<div className="whyall2">
							<div className="imgwhy">
								<img src={icon2} alt="" />
							</div>
							<div className="whyalltext">
								<p className="whyallp">Гарантія якості</p>
								<p className="whyallp1">
									Ми гарантуємо якість та безпеку кожного татуювання завдяки
									використанню високоякісних матеріалів, професійному підходу
									майстрів та уважному контролю якості на кожному етапі
									створення.
								</p>
							</div>
						</div>
					</div>
					<div className="whyall">
						<div className="whyall3">
							<div className="imgwhy">
								<img src={icon3} alt="" />
							</div>
							<div className="whyalltext">
								<p className="whyallp">Професійне обладнання</p>
								<p className="whyallp1">
									Наше обладнання відповідає високим стандартам безпеки,
									забезпечуючи комфорт та безпечність під час процедури
									татуювання.
								</p>
							</div>
						</div>
						<div className="whyall4">
							<div className="imgwhy">
								<img src={icon4} alt="" />
							</div>
							<div className="whyalltext">
								<p className="whyallp">Доступні ціни</p>
								<p className="whyallp1">
									Наш пріоритет - це забезпечення якості усіх послуг за розумні
									та конкурентоспроможні ціни.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default WhyChoose;
