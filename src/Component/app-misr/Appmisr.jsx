import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Appmisr.css'
import AOS from 'aos';


const Appmisr = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: false,
        });
    }, []);
    return (
        <div className='pb-3 pt-3  w-75 mx-auto'>
            <Row className="d-flex align-items-center justify-content-between text-center">

                <Col data-aos="fade-up">
                    <h2 className='text-center fs-1 p-4'>حمل تطبيق عقار يامصر</h2>
                    <p className='fs-4'>يعتبر موقع عقار يا مصر الموقع العقاري المجاني الأول في مصر حيث يمكنك البحث من خلال ماب الموقع عن عقارات للبيع او عقارات للإيجار بمساحات مختلفة وبالصور والأسعار من خلال متابعة اعلانات الموقع.</p>
                    <div className='text-center  pb-5 ffff  pt-5'>
                        <div className='fff'>
                            <a className="in " target="_blank" href="https://play.google.com/store/apps/details?id=aqar.ya.masr"><img src="https://aqaryamasr.com/assets/front/imgs/in.png" alt="تطبيق ايفون عقار يا مصر" /></a>
                        </div>
                    </div>
                </Col>
                <Col className='parent-image-app' data-aos="fade-up">
                    <img src="/images/Ya-Masr-app.webp" className='image-app ' alt="" />
                </Col>

            </Row>
        </div>
    )
}

export default Appmisr
