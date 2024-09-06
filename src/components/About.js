import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import abt from "../assets/images/about.jpg";

function About() {
  return (
    <>
      <Container className='mt-5 mb-5' data-aos="fade-up">
        <Row className="align-items-center">
          <Col md={12} lg={5}>
          <div className="image-wrapper">
              <img src={abt} alt="about us" className="img-fluid image" />
            </div>
          </Col>
          <Col md={12} lg={7} style={{textAlign:"justify"}}>
            <h1 className='highlighted-txt'>Transform Your Life Today</h1>
            <p>Welcome to FitZone, where fitness meets transformation. At FitZone, we’re dedicated to helping you unlock your full potential and achieve your fitness goals. Our team of experienced trainers and health experts is here to guide you every step of the way, offering personalized workout plans and nutritional advice tailored to your needs.</p>
            <p>Enjoy customized workouts and an encouraging community. Start your transformation with us today!</p>
            <Button variant="" className='btn-cls'>Get Started Now</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
