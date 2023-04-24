import React, { useState, useRef } from 'react';
import { checkPhoneNumber, validateEmail } from '../utils/helpers';
import contactImg from '../assets/contact-img-sq.jpg';
import '../styles/Contact.css';
import sWal from 'sweetalert';
import emailjs from '@emailjs/browser';

export default function Contact() {
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
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
		} else if (inputType === 'userName') {
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
		} else if (inputType === 'userName') {
			setUserName(inputValue);
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
				`Please enter a brief message and the best time to reach you.`
			);
			return;
		}
		if (!userName) {
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

		setUserName('');
		setProject('');
		setPhoneNumber('');
		setEmail('');
	};

	return (
		<section className="contactMe">
			<form className="contact_box" ref={form}>
				<h2>Contact Me</h2>
				<div className="input_group">
					<label className="label">
						Name
						<input
							value={userName}
							name="userName"
							onChange={handleInputChange}
							type="text"
							placeholder="Full Name"
							className="input"
							onKeyUp={handleKeyUp}
							onClick={handleKeyUp}
						/>
					</label>
				</div>
				<div className="input_group">
					<label className="label">
						Phone Number
						<input
							value={phoneNumber}
							name="phoneNumber"
							type="text"
							onChange={handleInputChange}
							className="input"
							placeholder="xxx-xxx-xxxx"
							onKeyUp={handleKeyUp}
							onClick={handleKeyUp}
						/>
					</label>
				</div>
				<div className="input_group">
					<label className="label">
						Email
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
					</label>
				</div>
				<div className="input_group">
					<label className="label">
						Message
						<textarea
							name="project"
							value={project}
							onChange={handleInputChange}
							className="input"
							placeholder="Please give a brief description of the project, questions, or request and the best time to contact you."
							onKeyUp={handleKeyUp}
							onClick={handleKeyUp}
						></textarea>
					</label>
				</div>
				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
				<button type="button" onClick={handleContactSubmit}>
					Submit
				</button>
				<div className="aTag">
					Reach me by email at{' '}
					<a className="aTag" href="mailto:kvance1010@protonmail.com">
						kvance1010@protonmail.com
					</a>
				</div>
			</form>
			<img src={contactImg} alt="a black and white image of a laptop" />
		</section>
	);
}
