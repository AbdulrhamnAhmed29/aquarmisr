import { useState, useEffect } from 'react'
import React from 'react'
import Navy from '../Navbary/Navy'
import Footer from '../footer/Footer'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'
import './pageDetails.css'



const PageDetails = () => {

  const navigate = useNavigate();

  const handleBookingClick = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.isLoggedIn) {
      navigate("/formbook");
    } else {
      navigate("/register");
    }
  };
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("/json-details/details.json")
      .then(res => res.json())
      .then(data => setInfo(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navy />
      <section className='back-g container'>
        {info.map(prop => (

          <div className="card  border  " data-aos="fade-up">
            <img src={prop.image} className='image ' alt={prop.title} />
            <div className="content ">
              <a href="#" >
                <span className="  text-white">
                  {prop.title}
                </span>
              </a>

              <p className="desc text-white">
                {prop.description}
              </p>
              <p className="desc text-white">
                {prop.governorate}
              </p>
              <p className="desc text-white">
                {prop.price}
              </p>

              <button className="w-100" onClick={handleBookingClick}>
                احجز الان
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>


        ))}
      </section>



      <Footer />
    </>
  )
}

export default PageDetails