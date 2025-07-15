import React, { useEffect } from 'react'
import AOS from 'aos'
import Navy from '../Navbary/Navy'
import './Form.css'
import { useNavigate } from 'react-router-dom'
import { auth, provider, signInWithPopup } from '../firebase/firebase';
import Footer from '../footer/Footer'



const Form = () => {
    const navigate = useNavigate();
    const back = (e) => {
        e.preventDefault();
        navigate('/');
    };
    useEffect(() => {
        AOS.init({
            duration: 3000,  // مدة الحركة بالملي ثانية
            once: true,      // هل الحركة تظهر مرة واحدة بس ولا مع كل scroll
        });
    }, []);


    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log("تم تسجيل الدخول بنجاح ✅", user);
                localStorage.setItem("user", JSON.stringify(user));
                navigate('/');
            })
            .catch((error) => {
                console.error("فشل تسجيل الدخول ❌", error);
            });
    };

    return (
        <>
            <Navy />




         <div className='parent-form'>
               <form className="form" onSubmit={back} data-aos="fade-up" >
                <div className="flex-column ">
                    <label htmlFor="email">الايميل</label>
                </div>
                <div className="inputForm pe-3 ">
                    <input placeholder="ادخل الايميل" className="input bg-transparent text-white " type="email" id="email" name="email" required />
                </div>

                <div className="flex-column">
                    <label htmlFor="password">الباسورد</label>
                </div>
                <div className="inputForm pe-3">
                    <input placeholder="ادخل الباسورد" className="input bg-transparent text-white" type="password" id="password" name="password" required />
                </div>

                <div className="flex-row">
                    <div>
                        <label htmlFor="remember">تذكرني</label>
                        <input type="checkbox" id="remember" />
                    </div>
                    <span className="span">هل نسيت الباسورد؟</span>
                </div>

                <button className="button-submit" type="submit">تسجيل الدخول</button>

                <p className="p">
                    ليس لديك حساب؟ <span className="span">انشاء حساب </span>
                </p>
                <p className="p line">تسجيل الدخول مع جوجل؟</p>

                <div className="flex-row">
                    <button className="btn google" onClick={handleGoogleLogin} type="button">
                        {/* Google SVG */}
                        جوجل
                    </button>

                </div>
            </form>

         </div>




            <Footer />

        </>

    )
}

export default Form
