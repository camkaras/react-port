import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';
import "./footer.css";

function Footer() {
	return (
		<Container className="footer text-center my-auto py-auto">
			<Row id="social-icons">
				<Col>
				<SocialIcon url="github.com/camkaras" target="_blank" rel="noopener noreferrer" />
				</Col>
			<Col>
				<SocialIcon url="ig @camkaras" target="_blank" rel="noopener noreferrer" />
			</Col>
			<Col>
				<SocialIcon url="stack @camkaras" target="_blank"rel="noopener noreferrer" />
			</Col>
			</Row>
		</Container>
	);
}

export default Footer;