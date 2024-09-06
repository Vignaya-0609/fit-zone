import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PricingPlans() {
  const plans = [
    {
      title: "Basic Plan",
      price: "199/month",
      features: [
        "Access to gym facilities",
        "Free fitness assessment",
        "Group workout sessions (3 per month)",
        "Locker room access",
      ],
    },
    {
      title: "Standard Plan",
      price: "299/month",
      features: [
        "Full gym access",
        "Unlimited group workout sessions",
        "Personalized workout plan",
        "Free fitness assessment",
        "Locker room & sauna access",
      ],
    },
    {
      title: "Premium Plan",
      price: "499/month",
      features: [
        "All Standard Plan benefits",
        "4 personal training sessions per month",
        "Nutrition consultation",
        "Exclusive classes (Yoga, Pilates, etc.)",
        "Free guest pass for a friend",
      ],
    },
  ];

  return (
    <Container className="mt-5 mb-5">
      <h2 className="mt-5 text-center mb-4">Our Pricing Plans</h2>
      <Row>
        {plans.map((plan, idx) => (
          <Col key={idx} md={4} className="mb-4">
            <Card className="h-100 prg-card" data-aos="fade-up">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{plan.title}</Card.Title>
                <h3 className="text-center">&#8377;{plan.price}</h3>
                <ul className="list-unstyled">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="" className="mt-auto btn-cls w-100">
                  Join Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PricingPlans;
