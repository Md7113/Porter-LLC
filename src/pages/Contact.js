import React, { useState, useRef } from 'react';
import { checkPhoneNumber, validateEmail } from '../utils/helpers';
import contactImg from '../images/shaking-hands-sm.jpg';
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

	const handleKeyUp = (e) => {
		const inputType = e.target.name;
		const inputValue = e.target.value;
		switch (inputType){
			case 'email': setErrorMessage('Email required');
			break;
			case'company': setErrorMessage('Company name required');
			break;
			case 'firstName':;
			case'lastName': setErrorMessage('Company name required');
			break;
			case 'phoneNumber': setErrorMessage('Phone number required');
			break;
			case'subject': setErrorMessage('Subject required');
			break;
			case'message': setErrorMessage('Please enter a brief message and the best time to reach you.');
			break;
			default: setErrorMessage('');
			break;
		}
		// if (inputType === 'email') {
		// 	if (!inputValue) {
		// 		setErrorMessage('Email required');
		// 	} else {
		// 		setErrorMessage('');
		// 	}
		// }
		// if (inputType === 'company') {
		// 	if (!inputValue) {
		// 		setErrorMessage('Company name required');
		// 	} else {
		// 		setErrorMessage('');
		// 	}
		// } else if (inputType === 'firstName' || inputType === 'lastName') {
		// 	if (!inputValue) {
		// 		setErrorMessage('Name required');
		// 	} else {
		// 		setErrorMessage('');
		// 	}
		// } else if (inputType === 'phoneNumber') {
		// 	if (!inputValue) {
		// 		setErrorMessage('Phone number required');
		// 	} else {
		// 		setErrorMessage('');
		// 	}
		// } else if (inputType === 'subject') {
		// 	if (!inputValue) {
		// 		setErrorMessage('Phone number required');
		// 	} else {
		// 		setErrorMessage('');
		// 	}
		// }else if (inputType === 'message') {
		// 	if (!inputValue) {
		// 		setErrorMessage(
		// 			'Please enter a brief message and the best time to reach you.'
		// 		);
		// 	} else {
		// 		setErrorMessage('');
		// 	}
		// }
	};

	const handleInputChange = (e) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		if (inputType === 'email') {
			setEmail(inputValue);
		} else if (inputType === 'firstName') {
			setFirstName(inputValue);
		} else if (inputType === 'lastName') {
			setLastName(inputValue);
		} else if (inputType === 'phoneNumber') {
			setPhoneNumber(inputValue);
		}else if (inputType === 'email') {
			setEmail(inputValue);
		}else if (inputType === 'company') {
			setCompany(inputValue);
		}else if (inputType === 'subject') {
			setSubject(inputValue);
		} else {
			setMessage(inputValue);
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
		setMessage('');
		setPhoneNumber('');
		setEmail('');
		setCompany('');
		setSubject('');
	};

	return (
		<section className="contactMe">
			<h2>CONTACT</h2>
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
						<div className='contactErrorMessage'>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
					<button type="button" onClick={handleContactSubmit}>
						Submit
					</button>
				</form>
				<div className="imgContactInfoContainer">
					<img src={contactImg} alt="" />
					<div className="businessInfoContact">
						<div> <span>Sacrament</span> | Phone:530.354.4450 </div>
						<div> <span>Southern California</span> | Phone: 949.514.5978 </div>
						<div> <span>Bay Area</span> | Phone: 360.927.8881 </div>
						<div>
							<a className="aTag" href="mailto:info@porterllc.com">
								<span>Email:</span> info@porterllc.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
