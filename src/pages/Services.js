import React from 'react';
import serviceList from '../utils/services.js';
import '../css/pages/Services.css';

const Services = () => {
	// Creates a services array from the services folder
	const services = serviceList();
	return (
		<div className='servicesContainer'>
			<h2>Services</h2>
			<hr />
			<div className="allServices">
				{services.map((service) => (
					<div
						className="serviceCard"
						key={' '}
						
					>
						<h3 className="serviceTitle">{service.service}</h3>
						<p className="serviceDescription">{service.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
