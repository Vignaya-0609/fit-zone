import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { MdOutlineFitnessCenter } from "react-icons/md";
function NavBar() {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" id="home">
      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex align-items-center"><span className='logo'><MdOutlineFitnessCenter/></span> FitZone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link onClick={()=>scrollToElement("home")}>Home</Nav.Link>
            <Nav.Link onClick={()=>scrollToElement("about")}>About</Nav.Link>
            <Nav.Link onClick={()=>scrollToElement("programs")}>Programs</Nav.Link>
            <Nav.Link onClick={()=>scrollToElement("services")}>Services</Nav.Link>
            <Nav.Link onClick={()=>scrollToElement("plans")}>Plans</Nav.Link>
            <Nav.Link onClick={()=>scrollToElement("community")}>Community</Nav.Link>
            <Button variant="" className='btn-cls'>Join Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

      

      
  )
}

export default NavBar