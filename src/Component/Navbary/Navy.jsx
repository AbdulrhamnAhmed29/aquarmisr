import React, { useEffect } from 'react'
import { Container, Navbar, Nav } from "react-bootstrap";
import './Navy.css';
import AOS from 'aos';




const Navy = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,  // مدة الحركة بالملي ثانية
      once: true,      // هل الحركة تظهر مرة واحدة بس ولا مع كل scroll
    });
  }, []);


  return (
    <>

      <Navbar expand="lg" className=" navbar-dark bg-gradient Container  nav-links" data-aos="fade-right">
        <Container >
          <Navbar.Brand href="#home" className='fw-bold fs-2'>عقار تيك</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='list' />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto ">
              <Nav.Link className='text-white style-links' href="#home">الصفحه الرئيسيه</Nav.Link>
              <Nav.Link className='text-white style-links' href="#chance">الفرص</Nav.Link>
              <Nav.Link className='text-white style-links' href="#plans"> المخططات </Nav.Link>
              <Nav.Link className='text-white style-links' href="#contact"> التواصل </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>

      </Navbar>








    </ >
  )
}

export default Navy
