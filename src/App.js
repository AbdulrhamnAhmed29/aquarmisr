
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// loading page spinenr 
import ClockLoader from "react-spinners/ClockLoader";
// style 
import './index.css'
// componenet 
import Home from './/Component/Home/Home';
import ImageDetails from './Component/more-details/ImageDetails';
import Form from './Component/login/Form';
import PageDetails from './Component/Page-details/pageDetails';
import RegisterForm from './Component/Register/register.jsx';
import Formbook from './Component/form-book/formbook';


const App = () => {
  const [load, setload] = useState(false);
  useEffect(() => {
    setload(true);
    setTimeout(() => { setload(false) }, 3000)
  }, [])
  return (
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
              <Route path="/form" element={<Form />} />
              <Route path='/PageDetails' element={<PageDetails />} />
              <Route path='/register' element={<RegisterForm />} />
              <Route path='/formbook' element={<Formbook />} />

            </Routes>

          </>
      }


    </BrowserRouter>
  )
}


export default App
