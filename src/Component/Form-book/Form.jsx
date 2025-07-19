import React, { useRef, useEffect } from 'react';
import Navy from '../Navbary/Navy';
import Footer from '../footer/Footer';
import emailjs from 'emailjs-com';
import './form.css';
import AOS from 'aos'


const FormBook = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: true,
        });
    }, []);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_z6dnwx8',        // Service ID
                'template_30y3n22',      
                form.current,               
                'dEfG2fpwfMmjG-70T'         
            )
            .then(() => {
                alert('تم إرسال الحجز بنجاح ✅');
                form.current.reset(); 
            })
            .catch((error) => {
                console.error('خطأ في الإرسال:', error);
                alert('حصلت مشكلة أثناء الإرسال ');
            });
    };

    const apartments = [
        'شقة 1 - القاهرة',
        'شقة 2 - الجيزة',
        'شقة 3 - الإسكندرية',
        'شقة 4 - المنصورة',
        'شقة 5 - طنطا',
        'شقة 6 - بورسعيد',
        'شقة 7 - دمياط',
        'شقة 8 - الزقازيق',
        'شقة 9 - المنوفية',
        'شقة 10 - سوهاج',
    ];

    return (
        <>
            <Navy />
            <div className='parent-foormbook' data-aos="fade-up">
                <form ref={form} onSubmit={handleSubmit} className="form-book bg-gradient">
                    <h3 className='text-center pb-4'> التواصل مع المالك </h3>

                    <input
                        type="text"
                        name="user_name" 
                        placeholder="الاسم"
                        required
                    />
                    <input
                        className='mobaile'
                        type="tel"
                        name="user_phone"
                        placeholder="رقم الموبايل"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="الإيميل"
                        required
                    />
                    <select
                        name="user_apartment"
                        className='btn fs-4 border rounded-5'
                        required
                    >
                        <option value="" className='text-white bg-black'>اختر شقة</option>
                        {apartments.map((apt, index) => (
                            <option key={index} className='bg-black' value={apt}>
                                {apt}
                            </option>
                        ))}
                    </select>
                    <textarea
                        className='w-100 mt-3 bg-transparent rounded-3 p-1 text-white'
                        name="message"
                        placeholder="ملاحظات إضافية"
                    />
                    <button type="submit" className="btn">إرسال الحجز</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default FormBook;
