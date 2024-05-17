import React from 'react'; //import React library
import { Header } from './Header'; //import Header from Header.js
import Home from './Home';
import MoreInformation from './Moreinformation.js';
import { TopOfHomePage } from './Home.js';
import { CompareApp } from './CompareApp.js';
import { Footer } from './Footer.js'; 
import { CarUpload } from './CarUpload.js';
import { Routes, Route, Outlet } from "react-router-dom";

function App(props) {
  return (
    <div className='container-fluid p-0'>
      

      <Header />
      <main>
      <Routes>
        <Route index element={<Home carData={props.props}/>} />
        <Route path="Compare" element={<CompareApp props={props.props} />}/>
        <Route path="Upload" element={<CarUpload props={props.props} />}/>
        <Route path="*" element={<Home carData={props.props}/>} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;