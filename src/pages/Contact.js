import React, { useState, useRef } from 'react';
import { checkPhoneNumber, validateEmail } from '../utils/helpers';
import contactImg from '../images/contact_us.jpg';
import '../css/pages/Contact.css';
import sWal from 'sweetalert';
import emailjs from '@emailjs/browser';

export default function Contact() {
	const [email, setEmail] = useState('');
	const [company, setCompany] = useState('');
	const [subject, setSubject] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [message, setMessage] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const form = useRef();

	// Sets the error message when something has not been entered into the input field
	const handleKeyUp = (e) => {
		const inputType = e.target.name;
		const inputValue = e.target.value;
		if (!inputValue) {
			switch (inputType) {
				case 'email':
					setErrorMessage('Email required');
					break;
				case 'company':
					setErrorMessage('Company name required');
					break;
				case 'firstName':
				case 'lastName':
					setErrorMessage('Company name required');
					break;
				case 'phoneNumber':
					setErrorMessage('Phone number required');
					break;
				case 'subject':
					setErrorMessage('Subject required');
					break;
				case 'message':
					setErrorMessage(
						'Please enter a brief message and the best time to reach you.'
					);
					break;
				default:
					setErrorMessage('');
					break;
			}
		} else {
			setErrorMessage('');
		}
	};

	// saves and displays the information that is input in the input field
	const handleInputChange = (e) => {
		const inputType = e.target.name;
		const inputValue = e.target.value;
		switch (inputType) {
			case 'email':
				setEmail(inputValue);
				break;
			case 'company':
				setCompany(inputValue);
				break;
			case 'firstName':
				setFirstName(inputValue);
				break;
			case 'lastName':
				setLastName(inputValue);
				break;
			case 'phoneNumber':
				setPhoneNumber(inputValue);
				break;
			case 'subject':
				setSubject(inputValue);
				break;
			case 'message':
				setMessage(inputValue);
				break;
			default:
				break;
		}
	};

	// confirms all information has been entered and validates the input
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
		if (!message) {
			setErrorMessage(
				`Please give a brief description of the message, questions, or request and the best time to contact you.`
			);
			return;
		}
		if (!firstName) {
			setErrorMessage(`Please enter your first name.`);
			return;
		}
		if (!lastName) {
			setErrorMessage(`Please enter your last name.`);
			return;
		}
		if (!company) {
			setErrorMessage(`Please enter your company.`);
			return;
		}
		if (!subject) {
			setErrorMessage(`Please enter a subject.`);
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
						'Thank you for contacting Porter. We will respond to your message in the next 24 hours to 48 hours.',
						'success'
					);
				},
				(error) => {
					console.log(error.text);
				}
			);

		// resets the input field
		setFirstName('');
		setLastName('');
		setMessage('');
		setPhoneNumber('');
		setEmail('');
		setCompany('');
		setSubject('');
	};

	return (
		<section className="contactMe">
			<h2>CONTACT</h2>
			<hr/>
			<div className="contactMeContainer">
				<form className="contactBox" ref={form}>
					<div>
						<input
							value={firstName}
							name="firstName"
							onChange={handleInputChange}
							type="text"
							placeholder="First Name*"
							className="input"
							onKeyUp={handleKeyUp}
							onClick={handleKeyUp}
						/>
						<input
							value={lastName}
							name="lastName"
							onChange={handleInputChange}
							type="text"
							placeholder="Last Name*"
							className="input"
							onKeyUp={handleKeyUp}
							onClick={handleKeyUp}
						/>
					</div>
					<div>
						<input
							value={phoneNumber}
							name="phoneNumber"
							type="text"
							onChange={handleInputChange}
							className="input"
							placeholder="Phone Number*"
							onKeyUp={handleKeyUp}
							onClick={handleKeyUp}
						/>
						<input
							value={email}
							name="email"
							onChange={handleInputChange}
							type="email"
							placeholder="Email*"
							className="input"
							onKeyUp={handleKeyUp}
							onClick={handleKeyUp}
						/>
					</div>
					<div>
						<input
							value={company}
							name="company"
							type="text"
							onChange={handleInputChange}
							className="input"
							placeholder="Company Name*"
							onKeyUp={handleKeyUp}
							onClick={handleKeyUp}
						/>
						<input
							value={subject}
							name="subject"
							type="text"
							onChange={handleInputChange}
							className="input"
							placeholder="Subject*"
							onKeyUp={handleKeyUp}
							onClick={handleKeyUp}
						/>
					</div>
					<textarea
						name="message"
						value={message}
						onChange={handleInputChange}
						className="inputTextArea"
						placeholder="Please give a brief description of the project, questions, or request and the best time to contact you."
						onKeyUp={handleKeyUp}
						onClick={handleKeyUp}
					/>
					{errorMessage && (
						<div className="contactErrorMessage">
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
					<button type="button" onClick={handleContactSubmit}>
						Submit
					</button>
				</form>
				<div className="imgContactInfoContainer">
					<img src={contactImg} alt="A persons hands typing on a computer in front of a light colored background a with a plant just off to the right. The plant is a green succulent and white vase" />
					
				</div>
			</div>
		</section>
	);
}
