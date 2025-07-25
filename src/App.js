
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// loading page spinenr 
import ClockLoader from "react-spinners/ClockLoader";
// style 
import './index.css'
// componenet 
import Home from './/Component/Home/Home';
import ImageDetails from './Component/more-details/ImageDetails';
import PageDetails from './Component/Page-details/pageDetails';
import RegisterForm from './Component/Register/register.jsx';
import FormBook from './Component/Form-book/Form.jsx';
import FormLogin from './Component/login/Form-login.jsx';


const App = () => {

  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards([...cards, { id: Date.now(), ...newCard }]);
  };







  const [load, setload] = useState(false);
  useEffect(() => {
    setload(true);
    setTimeout(() => { setload(false) }, 3000)
  }, [])
  return (
    <>

      <BrowserRouter>
        {
          load ? <div className={`loader `}>
            <ClockLoader size={100} color="#fcfcfcff" />
          </div>

            :
            <>

              <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/image/:id" element={<ImageDetails />} />
                <Route path="/form-login" element={<FormLogin />} />
                <Route path='/PageDetails' element={<PageDetails infoDate={cards} />} />
                <Route path='/FormBook' element={<FormBook />} />

                <Route path='/register' element={<RegisterForm />} />


              </Routes>

            </>
        }


      </BrowserRouter>
    </>
  )
}


export default App
