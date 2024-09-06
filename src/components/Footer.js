import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container fluid>
        <Row className='text-center'>
          <Col md={12}>
            <h5>Contact Us</h5>
            <p>123 FitZone Street, FitCity, FC 12345</p>
            <p>Email: contact@fitzone.com</p>
            <p>Phone: +123 456 7890</p>
            <Col md={12}>
            <h5>Follow Us</h5>
            <div className="d-flex align-items-center justify-content-center">
              <a href="https://facebook.com" className="text-light me-3" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" className="text-light me-3" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-light me-3" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-light" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </Col>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} FitZone. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
