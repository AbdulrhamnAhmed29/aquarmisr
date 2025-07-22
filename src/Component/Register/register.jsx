import React, { useState, useEffect } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navy from '../Navbary/Navy';
import { Link } from 'react-router-dom';
import './register.css'
import AOS from 'aos'


const RegisterForm = () => {
    const navigate = useNavigate()
        ;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        // تحقق إذا الإيميل موجود بالفعل
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            alert("هذا الإيميل مسجل بالفعل.");

        }

        const newUser = {
            name,
            email,
            password,
            isLoggedIn: true,
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        localStorage.setItem("user", JSON.stringify(newUser));

        navigate("/formbook");
    };
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: true,
        });
    }, []);

    return (
        <>
            <Navy />
            <div className='parent-register container '>
                <form className="form-regisster  bg-gradient" onSubmit={handleRegister} data-aos="fade-up">
                    <p className="title">انشاء حساب</p>
                    <p className="message">سجّل الآن واحصل على وصول كامل إلى تطبيقنا.</p>

                    <div className="flex">
                        <label >
                            <input
                                className='input'
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <span className='p-1'>الاسم</span>
                        </label>
                        <label>
                            <input
                                className='input'
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <span className='p-1'>اسم العائله</span>
                        </label>


                    </div>

                    <label>
                        <input
                            className='input'

                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <span className='p-1'>الايميل</span>
                    </label>

                    <label>
                        <input
                            className='input'

                            type="password"

                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span className='p-1'>كلمه السر</span>
                    </label>

                    <button type="submit" className='btn'>تسجيل</button>
                    <p className="signin">
                        ليس لديك حساب؟ <Link to={'/form-login'} className="span" >تسجيل دخول</Link>
                    </p>
                </form>
            </div>
           
        </>
    );
};

export default RegisterForm;
