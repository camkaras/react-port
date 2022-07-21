import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./about.css";
function About() {
	return (
		<Container>
			<Row>
				<div className="jumbotron jumbotron-fluid mb-0">
					<Container>
						<h1 className="display-4 pb-0 pb-sm-0 pb-md-0 mb-2 text-center">About Me</h1>
					</Container>
				</div>
			</Row>
			<Row>
				<Col xs={8} sm={6} md={6} lg={3} className="center mx-auto mb-lg-5 mb-m-4 mb-3">
					<img
						src=""
						alt="Me"
						className="img-fluid rounded-circle"
					/>
				</Col>
				<Col xs={12} sm={6} md={6} className="text-center my-auto" id="about">
					<p>
						My name is Cameron Karasiuk, and I have over 5 years of
						experience in various types of coding. I am currently enrolled at a coding boot camp at Carelton Univerity
                        to solidify my foundational knowledge of development.
					</p>
					<p>
						I have experience in front-end web development, working with technologies like
						CSS, HTML, JavaScript, JSON, Node.JS, Python and various other modern development
						media.
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default About;