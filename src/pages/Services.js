import React from 'react';
import serviceList from '../utils/services.js';

const Services = () => {
	// Creates a services array from the services folder
	const services = serviceList();
	return (
		<div>
			<h2>Services</h2>
			<hr />
			<div className="">
				{services.map((service) => (
					<div
						className=""
						key={' '}
						
					>
						<h3>{service.service}</h3>
						<p className="">{service.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
