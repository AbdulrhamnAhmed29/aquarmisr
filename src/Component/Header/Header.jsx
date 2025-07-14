import React, { useEffect } from "react";
// component 
import './Header.css'
// animate 
import AOS from 'aos';

function IndividualIntervalsExample() {
  useEffect(() => {
    AOS.init({
      duration: 3000, once: true
    });
  }, []);

  return (
    <section className='panner' id="home">
      <div className="p-5 text-center" data-aos="fade-right" >
        <h1 className="text-center  text-white">المنصة الأولى في مصر تستخدم
          الذكاء الاصطناعي بالعقارات</h1>
        <p className="text-white pw-bold">استكشف قوائم العقارات الواسعة حسب الفئة من خلال بحثنا سهل الاستخدام. ابحث عن شريكك المثالي!
        </p>
        <a href="#plans"> <button className="button2">اضغط لعروض العقارات </button></a>
      </div>

    </section>
  );
}


export default IndividualIntervalsExample;