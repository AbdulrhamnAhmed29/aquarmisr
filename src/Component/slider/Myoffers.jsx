import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Myoffers.css';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import AOS from 'aos';


export default function Offer() {


    const navigate = useNavigate()
    const handeldetaild = () => (
        navigate('/PageDetails')
    )
    // json data 
    const [post, setpost] = useState([]);
    useEffect(() => {
        fetch("/json-prop/properties.json").then(res => res.json()).then(data => {
            console.log(data);
            setpost(data);
        })
    }, [])

    // animate 
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: false,
        });
    }, []);


    return (
        <>
            {/* card  */}
            <div className='p-5  planss' data-aos="fade-up">
                <h2 id='plans' className='text text-center  '> العروض</h2>
                {/* swiper  */}
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >

                    {post.map((el, index) => (
                        <SwiperSlide key={index}>
                            <Link
                                key={index}
                                to={`/image/${el.id}`}
                                state={el}
                            >
                                <img src={el.image} className=' w-100 plan-image' />

                            </Link>


                        </SwiperSlide>


                    ))}


                </Swiper>
                <button className='btn text-white' onClick={handeldetaild}>عرض المزيد</button>
            </div>
            <hr />
            <hr />
        </>
    );
}
