import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import Navy from '../Navbary/Navy'
import './Form-login.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer'

const FormLogin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: true,
        });
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //  تسجيل الدخول
    const handleLogin = (e) => {
        e.preventDefault();  // تمنع إعادة تحميل الصفحة

        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.email === email && user.password === password) {
            user.isLoggedIn = true;
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
        } else {
            alert("بيانات الدخول غير صحيحة");
        }
    };
    // الانتقال الانشاء حساب
    const navigatCreateAcount = useNavigate();
    const toRegister=()=>(
        navigatCreateAcount('/register')
    )

    return (
        <>
            <Navy />

            <div className='parent-form'>
                <form className="form bg-gradient" onSubmit={handleLogin} data-aos="fade-up" >
                    <div className="flex-column ">
                        <label htmlFor="email">الايميل</label>
                    </div>
                    <div className="inputForm pe-3 ">
                        <input
                            placeholder="ادخل الايميل"
                            className="input bg-transparent text-white "
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex-column">
                        <label htmlFor="password">الباسورد</label>
                    </div>
                    <div className="inputForm pe-3">
                        <input
                            placeholder="ادخل الباسورد"
                            className="input bg-transparent text-white"
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
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
                        ليس لديك حساب؟ <span className="span" onClick={toRegister}>انشاء حساب </span>
                    </p>

                    <div className="flex-row">
                    </div>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default FormLogin
