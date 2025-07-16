import { Container, Navbar, Nav } from "react-bootstrap";
import './Navy.css';




const Navy = () => {



  return (
    <>
<div>
  
      <Navbar expand="lg" className=" navbar-dark bg-gradient  nav-links" >
        <Container >
          <Navbar.Brand href="#home" className='fw-bold fs-2'><img src="/images/logo.svg" className='w-75' alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='list' />
          <Navbar.Collapse id="basic-navbar-nav ps-5 ms-5 ">
            <Nav className="me-auto ">
              <Nav.Link className='text-white style-links fs-5' href="/" >الصفحه الرئيسيه</Nav.Link>
              <Nav.Link className='text-white style-links  fs-5' href="#chance">الفرص</Nav.Link>
              <Nav.Link className='text-white style-links  fs-5' href="#plans"> العروض </Nav.Link>
              <Nav.Link className='text-white style-links  fs-5' href="#contact"> التواصل </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>

      </Navbar>
</div>








    </ >
  )
}

export default Navy
