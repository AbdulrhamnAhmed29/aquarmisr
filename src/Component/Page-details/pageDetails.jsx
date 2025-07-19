import { useState, useEffect } from 'react'
import React from 'react'
import Navy from '../Navbary/Navy'
import Footer from '../footer/Footer'
import './pageDetails.css'
import { useNavigate } from 'react-router-dom';
import './pageDetails.css'
import AOS from 'aos'



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
            <section  >
                <div className=' parent-page  container mx-auto '>

                    {info.map(prop => (
                      <div className=' m-2 back-g' data-aos="fade-up">
                         <div className="card ">
                            <img src={prop.image} className='image' alt={prop.title} />
                            <div className="content">
                                <a href="#" >
                                    <span className="  text-white">
                                        {prop.title}
                                    </span>
                                </a>

                                <p className="desc">
                                    {prop.description}
                                </p>
                                <p className="desc">
                                    {prop.governorate}
                                </p>
                                <p className="desc">
                                    {prop.price}
                                </p>

                                <button className="" onClick={handleBookingClick}>
                                    احجز الان
                                    <span aria-hidden="true">→</span>
                                </button>
                            </div>
                        </div>
                      </div>
            

                    ))}

                </div>
            </section>
            <Footer />
        </>
    )
}

export default PageDetails
