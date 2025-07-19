import { Container, Navbar, Nav } from "react-bootstrap";
import './Navy.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";




const Navy = () => {



  return (
    <>
      <div>

        <Navbar expand="lg" className=" navbar-dark bg-gradient  nav-links" >
          <Container >
            <Navbar.Brand href="#home" className='fw-bold fs-2'><img src="/images/logo.svg" className='w-75' alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav " className='list ' />
            <Navbar.Collapse id="basic-navbar-nav ps-5 ms-5 ">
              <Nav className="me-auto ">
                <Link className='text-white style-links link p-3 fs-5' to={'/'}>الصفحه الرئيسيه </Link>
                <Link className='text-white style-links link  p-3 fs-5' to={'/PageDetails'}> العروض</Link>
                <Link className='text-white style-links link  p-3  fs-5' to={"/PageDetails"}> المخططات</Link >
                <Link className='text-white style-links link  p-3 fs-5' to={"/FormBook"}> التواصل </Link>

              </Nav>
              <Link to={'/register'} className="link-user link  pt-0"><button className="btn pt-0   mb-2"> انشاء حساب</button></Link>

            </Navbar.Collapse>



          </Container>



        </Navbar >
      </div>










    </ >
  )
}

export default Navy
