import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import banner from "../assets/images/banner.jpg";

function Banner() {
  return (
    <>
      <Container className='banner' data-aos="fade-up">
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className='highlighted-txt'>Unlock Your Best Self</h1>
            <p>Join FitZone today and start your journey toward strength, fitness, and a healthier you. Our expert trainers and tailored programs are designed to help you achieve your fitness goals effectively.</p>
            <p>Experience personalized workouts, nutritional guidance, and a supportive community. At FitZone, we’re committed to your success and well-being. Take the first step towards a new you!</p>
            <Button variant="" className='btn-cls' size="lg">Join Us Today</Button>
          </Col>
          <Col md={5}>
            <img src={banner} alt="banner" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Banner;
