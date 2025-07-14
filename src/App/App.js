
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";
import Home from '../Component/Home';
import '../index.css'

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
              <Route path='../Componnent/Home/Home' element={<Home />} />
            </Routes>
          </>
      }


    </BrowserRouter>
  )
}

export default App
