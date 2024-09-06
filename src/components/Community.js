import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import communityImage from '../assets/images/par.jpg';
import user1 from"../assets/images/user1.jpg";
import user2 from"../assets/images/user2.jpg";
import user3 from"../assets/images/user3.jpg";
function Community() {
  const testimonials = [
    {
      name: 'John Doe',
      image: user1, 
      message: 'Joining FitZone has completely transformed my life. The community support keeps me motivated every day.',
    },
    {
      name: 'Jane Smith',
      image: user2,
      message: "The supportive and friendly atmosphere creates a sense of belonging, making it feel like a second home.",
    },
    {
      name: 'Alex Johnson',
      image: user3,
      message: "I've never been part of such an encouraging and supportive community. FitZone is the best decision I made for my health!"
    },
  ];

  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image src={communityImage} alt="Community" fluid className="rounded" />
        </Col>
        <Col md={6}>
          <h1 className="highlighted-txt">Join Our Vibrant Community</h1>
          <p>At FitZone, you're not just a member – you're part of a community that thrives on shared goals and mutual support. Connect with like-minded individuals who will encourage and push you to reach your fitness goals.</p>
          <Button variant="" className="btn-cls" size="lg">Be a Part of FitZone</Button>
        </Col>
      </Row>

      <h2 className="mt-5 text-center mb-4">What Our Community Says</h2>
      <Row xs={1} sm={2} md={3} className="g-4">
        {testimonials.map((testimonial, idx) => (
          <Col key={idx}>
            <Card className="text-center prg-card" data-aos="fade-up">
              <Card.Body>
                <Image src={testimonial.image} roundedCircle alt={testimonial.name} className="mb-3 img-fluid testimonial-image" />
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                  "{testimonial.message}"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Community;
