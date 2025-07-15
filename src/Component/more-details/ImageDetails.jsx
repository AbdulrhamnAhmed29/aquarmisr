import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Navy from '../Navbary/Navy';
import './ImageDetails.css';
import AOS from 'aos';
import Footer from '../footer/Footer';

const ImageDetails = () => {
    const navigate = useNavigate(); //
    const Handlebook = () => {
        navigate('/form');
    };
    const { id } = useParams();
    const { state } = useLocation();

    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: true,
        });
    }, []);


    if (!state) return <p className='fs-1 text text-center p-5 mt-5'>لا يوجد بيانات </p>;

    const { title, price, location, image } = state;


    return (
        <>
            <Navy />
            <div className='pb-5 pt-5'>
                <div className="container my-5 details p-5">
                    <div className='img-parent '>
                        <img src={image} className="rounded-4 mb-4" alt={title} data-aos="fade-left" />
                    </div>
                    <ul data-aos="fade-right" className='p-1'>
                        <li className='fs-1'><p><strong>العنوان</strong> : {title}</p></li>
                        <li className='fs-1'><p><strong>السعر</strong> : {price}</p></li>
                        <li className='fs-1'><p><strong>الموقع</strong> : {location}</p></li>
                        <button className='btn bg-black fs-2 book' onClick={Handlebook}>احجز الآن</button>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ImageDetails;
