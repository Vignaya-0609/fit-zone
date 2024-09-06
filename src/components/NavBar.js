import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { MdOutlineFitnessCenter } from "react-icons/md";
function NavBar() {
  return (
    <>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex align-items-center"><span className='logo'><MdOutlineFitnessCenter/></span> FitZone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#program">Program</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#plans">Plans</Nav.Link>
            <Nav.Link href="#community">Community</Nav.Link>
            <Button variant="" className='btn-cls'>Join Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

      

      
  )
}

export default NavBar