import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Myoffers.css';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Offer() {
    const [post, setpost] = useState([]);
    useEffect(() => {
        fetch("/json-prop/properties.json").then(res => res.json()).then(data => {
            console.log(data);
            setpost(data);
        })
    }, [])


    return (
        <>
        <div className='p-5  planss'>
            <h2 id='plans' className='text text-center  '>العروض</h2>
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
            
        </div>
        <hr />
        <hr />
        </>
    );
}
