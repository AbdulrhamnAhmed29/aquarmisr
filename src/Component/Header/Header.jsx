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
    <header className="bg">
      <div className="content p-5" data-aos="fade-left">
        <h2 className="fs-1">مرحبا بك في عقار يامصر </h2>
        <h2 className="fs-1">اكتشف أفضل الفرص العقارية في مصر</h2>
        <p>شقق – فيلات – أراضي – وحدات تجارية</p>
        <p>كل ما تحتاجه في مكان واحد... بكل ثقة وشفافية</p>
      </div>
    </header>

  );
}


export default IndividualIntervalsExample;