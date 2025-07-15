import React,{useEffect} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import './Accord.css' 
import AOS from 'aos';

const Acord = () => {
        useEffect(() => {
            AOS.init({
                duration: 3000,
                once: false,
            });
        }, []);
    return (
        <div className='pt-5 pb-5 acord-section'>
            <h2 ata-aos="fade-up" className='fs-1 p-5 text-center text-white'>س & ج</h2>

            <Accordion  defaultActiveKey="0" flush className='container'>
                <Accordion.Item ata-aos="fade-up" eventKey="0" className='acord-item'>
                    <Accordion.Header>ما هي خدمات عقار ستور؟</Accordion.Header>
                    <Accordion.Body>
                        عقار ستور بيقدملك أدق بحث عقاري في مصر، مع إمكانية التصفية حسب السعر، الموقع، والمساحة، وبتحديث مستمر من آلاف الإعلانات الموثوقة.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item ata-aos="fade-up"  eventKey="1" className='acord-item'>
                    <Accordion.Header>هل الموقع مجاني؟</Accordion.Header>
                    <Accordion.Body>
                        أه طبعًا، الموقع مجاني 100% لعرض أو تصفح العقارات، سواء للبيع أو الإيجار، من غير أي عمولات أو وسيط.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Acord
