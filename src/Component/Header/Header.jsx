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
    <div className="video-background" data-aos="fade-up mt-5">
      <video autoPlay muted loop playsInline className="video">
        <source src="/images/hero.mp4" type="video/mp4" />
        المتصفح لا يدعم تشغيل الفيديو
      </video>
      <div className="overlay"></div>

      <div className="content" data-aos="fade-left">
        <h2 className="fs-1">مرحبا بك في عقار يامصر </h2>
        <h2 className="fs-1">اكتشف أفضل الفرص العقارية في مصر</h2>
        <p>شقق – فيلات – أراضي – وحدات تجارية</p>
        <p>كل ما تحتاجه في مكان واحد... بكل ثقة وشفافية</p>
      </div>
    </div>


  );
}


export default IndividualIntervalsExample;