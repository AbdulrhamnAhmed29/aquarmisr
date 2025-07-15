
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// loading page spinenr 
import ClockLoader from "react-spinners/ClockLoader";
// style 
import './index.css'
// componenet 
import Home from './/Component/Home/Home';
import ImageDetails from './Component/more-details/ImageDetails';
import Form from './Component/form/Form';


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
            </Routes>

          </>
      }


    </BrowserRouter>
  )
}

export default App
