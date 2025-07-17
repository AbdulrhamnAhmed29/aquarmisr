import React, { useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navy from '../Navbary/Navy';

const RegisterForm = () => {
    const navigate = useNavigate();

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

    return (
        <>
            <Navy />
            <form className="form-regisster" onSubmit={handleRegister}>
                <p className="title">Register</p>
                <p className="message">Signup now and get full access to our app.</p>

                <div className="flex">
                    <label>
                        <input
                            type="text"
                            placeholder="الاسم"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input className="input" type="text" placeholder="" required />
                        <span>Lastname</span>
                    </label>
                </div>

                <label>
                    <input
                        type="email"
                        placeholder="الإيميل"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <span>Email</span>
                </label>

                <label>
                    <input
                        type="password"
                        placeholder="كلمة السر"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span>Password</span>
                </label>

                <button type="submit" className='btn'>تسجيل</button>
                <p className="signin">
                    Already have an account? <a href="#">Signin</a>
                </p>
            </form>
            <Footer />
        </>
    );
};

export default RegisterForm;
