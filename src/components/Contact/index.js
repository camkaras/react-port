import React, { useState } from "react";
import { Container, Row, Button, Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { validateEmail } from '../../utils/helpers';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [welcomeMessage, setWelcomeMessage] = useState('');
	const [error, setError] = useState('');

	const handleInputChange = (e) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		if (inputType === 'name') {
			setName(inputValue);
		} else if (inputType === 'email') {
			setEmail(inputValue);
		} else {
			setMessage(inputValue);
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!name) {
			setError('A valid name is required.');
			return;
		}
		if(!validateEmail(email) || !email) {
			setError('A valid email is required.');
			return;
		}

		if (!message) {
			setError('Message is required');
			return;
		}
		const msg = 'Thank you for your message, ' + name + '! I will get back to you soon.';
		setWelcomeMessage(msg);

		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<Container>
			<Row>
				<div className="jumbotron jumbotron-fluid mb-0">
					<Container>
						<h1 className="display-4 pb-0 pb-sm-0 pb-md-0 mb-2 text-center">Contact Me</h1>
					</Container>
				</div>
			</Row>
			<Row>
				<Container>
					<Form className="form">
						<Form.Group>
							<Form.Label htmlFor="name">Name</Form.Label>
							<Form.Control onChange={handleInputChange} type="text" placeholder="Enter name" name="name" value={name} required />
						</Form.Group>
						<Form.Group>
							<Form.Label>Email address</Form.Label>
							<Form.Control onChange={handleInputChange} type="email" placeholder="name@example.com" name="email" value={email} required />
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor="message">Message</Form.Label>
							<Form.Control onChange={handleInputChange} as="textarea" rows={3} required name="message" value={message} />
						</Form.Group>

						<Button variant="primary" type="submit" onClick={handleFormSubmit}>Submit</Button>
					</Form>
					{error && (
						<div>
							<p className="error-text">{error}</p>
						</div>
					)}
					<Alert variant="success">
						<p>{welcomeMessage}</p>
                    </Alert>
				</Container>
			</Row>
		</Container>
	);
}

export default Contact;