import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaHeartPulse } from "react-icons/fa6";
import { FaRunning } from "react-icons/fa";
import { FaWeight } from "react-icons/fa";

const data = [
  {
    icon: <GiWeightLiftingUp />,
    title: "Strength",
    description: "Build overall strength with physical, mental, and emotional resilience."
  },
  {
    icon: <FaHeartPulse />,
    title: "Physical Fitness",
    description: "Boost cardio health and endurance with tailored fitness routines."
  },
  {
    icon: <FaRunning />,
    title: "Fat Loss",
    description: "Achieve fat loss with targeted workouts and nutritional guidance."
  },
  {
    icon: <FaWeight />,
    title: "Weight Gain",
    description: "Gain muscle with structured weight training and customized diets."
  }
];

function Program() {
  return (
    <Container className='mt-5 mb-5'>
      <h2 className='mt-5 mb-4 text-center'>Explore Our Program</h2>
      <Row xs={1} sm={2} md={2} lg={4} className="g-4">
        {data.map((item, idx) => (
          <Col key={idx}>
            <Card className='prg-card' data-aos="fade-up">
              <Card.Body>
                <div className="mb-3 prg-icon">
                  {item.icon}
                </div>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    <div className='d-flex flex-column justify-content-between h-100'>
                        <div><p>{item.description}</p></div>
                        <div><Button variant="" className='btn-cls mt-3 w-100'>Join Us</Button></div> 
                    </div> 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Program;
