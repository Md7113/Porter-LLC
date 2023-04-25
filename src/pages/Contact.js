import React, { useState, useRef } from 'react';
import { checkPhoneNumber, validateEmail } from '../utils/helpers';
import contactImg from '../images/shaking-hands-sm.jpg';
import '../css/pages/Contact.css';
import sWal from 'sweetalert';
import emailjs from '@emailjs/browser';

export default function Contact() {
	const [email, setEmail] = useState('');
	const [company, setCompany] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [project, setProject] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const form = useRef();

	const handleKeyUp = (e) => {
		const inputType = e.target.name;
		const inputValue = e.target.value;
		if (inputType === 'email') {
			if (!inputValue) {
				setErrorMessage('Email required');
			} else {
				setErrorMessage('');
			}
		} if (inputType === 'company') {
			if (!inputValue) {
				setErrorMessage('Company name required');
			} else {
				setErrorMessage('');
			}
		}else if (inputType === 'firstName' || inputType === 'lastName') {
			if (!inputValue) {
				setErrorMessage('Name required');
			} else {
				setErrorMessage('');
			}
		} else if (inputType === 'phoneNumber') {
			if (!inputValue) {
				setErrorMessage('Phone number required');
			} else {
				setErrorMessage('');
			}
		} else if (inputType === 'project') {
			if (!inputValue) {
				setErrorMessage(
					'Please enter a brief message and the best time to reach you.'
				);
			} else {
				setErrorMessage('');
			}
		}
	};

	const handleInputChange = (e) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		if (inputType === 'email') {
			setEmail(inputValue);
		} else if (inputType === 'firstName') {
			setFirstName(inputValue);
		}else if (inputType === 'lastName') {
			setLastName(inputValue);
		} else if (inputType === 'phoneNumber') {
			setPhoneNumber(inputValue);
		} else {
			setProject(inputValue);
		}
	};

	const handleContactSubmit = (e) => {
		e.preventDefault();
		if (!validateEmail(email)) {
			setErrorMessage('invalid Email, please try again.');
			return;
		}
		if (!checkPhoneNumber(phoneNumber)) {
			setErrorMessage(
				`Please enter a valid phone number. Phone numbers should be only numbers without spaces.`
			);
			return;
		}
		if (!project) {
			setErrorMessage(
				`Please give a brief description of the project, questions, or request and the best time to contact you.`
			);
			return;
		}
		if (!firstName) {
			setErrorMessage(`Please enter your name.`);
			return;
		}

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					sWal(
						'message sent!',
						'Thank you for contacting me. I will respond to your message in the next 24 hours to 48 hours to your request.',
						'success'
					);
				},
				(error) => {
					console.log(error.text);
				}
			);

		setFirstName('');
		setLastName('');
		setProject('');
		setPhoneNumber('');
		setEmail('');
		setCompany('');
	};

	return (
		<section className="contactMe">
			<h2>Contact</h2>
			<form className="contact_box" ref={form}>
						<input
							value={firstName}
							name="firstName"
							onChange={handleInputChange}
							type="text"
							placeholder="First Name"
							className="input"
							onKeyUp={handleKeyUp}
							onClick={handleKeyUp}
						/>
						<input
							value={lastName}
							name="lastName"
							onChange={handleInputChange}
							type="text"
							placeholder="Last Name"
							className="input"
							onKeyUp={handleKeyUp}
							onClick={handleKeyUp}
						/>
						<input
							value={phoneNumber}
							name="phoneNumber"
							type="text"
							onChange={handleInputChange}
							className="input"
							placeholder="Phone Number"
							onKeyUp={handleKeyUp}
							onClick={handleKeyUp}
						/>
						<input
							value={company}
							name="company"
							type="text"
							onChange={handleInputChange}
							className="input"
							placeholder="Company"
							onKeyUp={handleKeyUp}
							onClick={handleKeyUp}
						/>
						<input
							value={email}
							name="email"
							onChange={handleInputChange}
							type="email"
							placeholder="email"
							className="input"
							onKeyUp={handleKeyUp}
							onClick={handleKeyUp}
						/>
						<textarea
							name="project"
							value={project}
							onChange={handleInputChange}
							className="input"
							placeholder="Please give a brief description of the project, questions, or request and the best time to contact you."
							onKeyUp={handleKeyUp}
							onClick={handleKeyUp}
						></textarea>
				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
				<button type="button" onClick={handleContactSubmit}>
					Submit
				</button>
			</form>
			<img src={contactImg} alt="" />
			<div className="aTag">
				<span> Sacrament | Phone:530.354.4450 </span>
				<span> Southern California | Phone: 949.514.5978 </span>
				<span> Bay Area | Phone: 360.927.8881 </span>
					
					<a className="aTag" href="mailto:info@porterllc.com">
						Email: info@porterllc.com
					</a>
				</div>
		</section>
	);
}
