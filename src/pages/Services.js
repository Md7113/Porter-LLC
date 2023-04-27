import React from 'react';
import serviceList from '../utils/services.js';
import Fade from 'react-reveal/Fade';
import '../css/pages/Services.css';

const Services = () => {
	// Creates a services array from the services folder
	const services = serviceList();
	return (
		<div className="servicesContainer">
			<h2>Services</h2>
			<hr />
			<div className="allServices">
				{services.map((service) => (
					<Fade bottom cascade key={service.id}>
						<div className="serviceCard">
							<h3 className="serviceTitle">{service.service}</h3>
							<p className="serviceDescription">{service.description}</p>
						</div>
					</Fade>
				))}
			</div>
		</div>
	);
};

export default Services;
