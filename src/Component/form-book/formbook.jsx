import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navy from '../Navbary/Navy';
import Footer from '../footer/Footer';
import './formbook.css'

const propertyData = [
  {
    "id": 1,
    "title": "شقة فاخرة في الزمالك",
    "location": "الزمالك",
    "price": "2,500,000 ج.م",
    "image": "/images/img(1).webp",
    "climate": "معتدل",
    "governorate": "القاهرة",
    "description": "شقة واسعة وفاخرة في قلب الزمالك، قريبة من النيل والمرافق الحيوية، تصميم حديث ومساحات مفتوحة."
  },
  {
    "id": 2,
    "title": "شقة مميزة في المعادي",
    "location": "المعادي",
    "price": "1,800,000 ج.م",
    "image": "/images/img(2).webp",
    "climate": "حار جاف",
    "governorate": "القاهرة",
    "description": "شقة مريحة تقع في منطقة هادئة بالمعادي، مثالية للعائلات مع إطلالة جميلة وحدائق قريبة."
  },
  {
    "id": 3,
    "title": "شقة جديدة في مدينة نصر",
    "location": "مدينة نصر",
    "price": "1,200,000 ج.م",
    "image": "/images/img(3).webp",
    "climate": "حار رطب",
    "governorate": "القاهرة",
    "description": "شقة حديثة تقع في منطقة حيوية بمدينة نصر، مع سهولة الوصول للمواصلات والخدمات."
  },
  {
    "id": 4,
    "title": "شقة فسيحة في التجمع الخامس",
    "location": "التجمع الخامس",
    "price": "3,000,000 ج.م",
    "image": "/images/img(4).webp",
    "climate": "معتدل",
    "governorate": "القاهرة",
    "description": "شقة كبيرة مع غرف نوم متعددة ومساحات مفتوحة، تقع في منطقة راقية بالتجمع الخامس."
  },
  {
    "id": 5,
    "title": "شقة على البحر في الإسكندرية",
    "location": "الإسكندرية",
    "price": "2,200,000 ج.م",
    "image": "/images/img(5).webp",
    "climate": "بحري معتدل",
    "governorate": "الإسكندرية",
    "description": "شقة مطلة على البحر في الإسكندرية، تتميز بجو منعش وإطلالة خلابة على البحر الأبيض المتوسط."
  },
  {
    "id": 6,
    "title": "شقة دافئة في الأسكندرية الجديدة",
    "location": "الإسكندرية الجديدة",
    "price": "1,750,000 ج.م",
    "image": "/images/img(6).webp",
    "climate": "بحري معتدل",
    "governorate": "الإسكندرية",
    "description": "شقة تقع في منطقة متطورة بالإسكندرية الجديدة، مناسبة للعائلات الباحثة عن الراحة."
  },
  {
    "id": 7,
    "title": "شقة عائلية في 6 أكتوبر",
    "location": "6 أكتوبر",
    "price": "1,600,000 ج.م",
    "image": "/images/img(7).webp",
    "climate": "صحراوي",
    "governorate": "الجيزة",
    "description": "شقة مناسبة للعائلات في مدينة 6 أكتوبر، منطقة هادئة وقريبة من المدارس والمستشفيات."
  },
  {
    "id": 8,
    "title": "شقة فخمة في المهندسين",
    "location": "المهندسين",
    "price": "2,900,000 ج.م",
    "image": "/images/img(8).webp",
    "climate": "معتدل",
    "governorate": "الجيزة",
    "description": "شقة أنيقة تقع في منطقة المهندسين، تتميز بقربها من الخدمات والمولات الكبرى."
  },
  {
    "id": 9,
    "title": "شقة راقية في مدينة 15 مايو",
    "location": "مدينة 15 مايو",
    "price": "1,100,000 ج.م",
    "image": "/images/img(9).webp",
    "climate": "صحراوي",
    "governorate": "القاهرة",
    "description": "شقة في منطقة متوسطة بمدينة 15 مايو، توفر بيئة هادئة ومرافق أساسية للعائلات."
  },
  {
    "id": 10,
    "title": "شقة حديثة في الحي السادس",
    "location": "الحي السادس",
    "price": "1,900,000 ج.م",
    "image": "/images/img(10).webp",
    "climate": "معتدل",
    "governorate": "الجيزة",
    "description": "شقة حديثة ومساحات واسعة في الحي السادس، قريبة من الطرق الرئيسية والمواصلات."
  }
];

const Formbook = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    property: ""
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.isLoggedIn) {
      navigate("/register");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:abdulrhmanaahmed4@gmail.com?subject=طلب حجز عقار&body=
    الاسم: ${formData.name}%0D%0A
    رقم الهاتف: ${formData.phone}%0D%0A
    العقار المختار: ${formData.property}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <Navy />
      <div className='form-book' >

        <form onSubmit={sendEmail} className="space-y-4 max-w-md mx-auto p-4 shadow rounded">
          <h2 className='text-center p-3' >حجز عقار</h2>

          <label className='fs-5'>الاسم</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='الاسم بالكامل'

            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />

          <label className='fs-5'>رقم الهاتف</label>
          <input
            type="tel"
            name="phone"
            className='text-end'
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder='ادخل رقم الهاتف'
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />

          <label className='fs-4'>اختر العقار</label>
          <select
            name="property"
            value={formData.property}
            onChange={handleChange}
            required
            className='p-2 w-100 bg-black bg-gradient text-white fs-4'
          >
            <option value="" className='text-white '>اختر </option>
            {propertyData.map((item, index) => (
              <option key={index} value={item.title}>
                {item.title}
              </option>

            ))}
          </select>

          <button type="submit" className='btn fs-1 mt-5'>
            حجز          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Formbook;
