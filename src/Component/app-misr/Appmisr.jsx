import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Appmisr.css'

const Appmisr = () => {
    return (
        <Container className='pt-5 pb-5'>
            <Row className="d-flex align-items-center justify-content-between">

                <Col>
                    <h2 className='text-center fs-1 p-4'>حمل تطبيق عقار يامصر</h2>
                    <p className='fs-4'>يعتبر موقع عقار يا مصر الموقع العقاري المجاني الأول في مصر حيث يمكنك البحث من خلال ماب الموقع عن عقارات للبيع او عقارات للإيجار بمساحات مختلفة وبالصور والأسعار من خلال متابعة اعلانات الموقع.</p>
                    <div className='text-center  pb-5  pt-5'>
                        <div className='fff'>
                            <a className="in me-3  " target="_blank" href="https://play.google.com/store/apps/details?id=aqar.ya.masr"><img src="https://aqaryamasr.com/assets/front/imgs/in.png" alt="تطبيق ايفون عقار يا مصر" /></a>
                        </div>
                        <a className="aple me-3 " target="_blank" href="https://apps.apple.com/us/app/%D8%B9%D9%82%D8%A7%D8%B1-%D9%8A%D8%A7-%D9%85%D8%B5%D8%B1/id1572629063"><img src="https://aqaryamasr.com/assets/front/imgs/aple.png" alt="تطبيق اندرويد عقار يا مصر" /></a>
                    </div>
                </Col>
                <Col className='parent-image-app'>
                    <img src="/images/Ya-Masr-app.webp" className='omage-app' alt="" />
                </Col>

            </Row>
        </Container>
    )
}

export default Appmisr
