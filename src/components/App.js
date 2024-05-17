import React from 'react'; //import React library
import { Header } from './Header'; //import Header from Header.js
import Home from './Home';
import MoreInformation from './Moreinformation.js';

import { CompareApp } from './CompareApp.js';
import { Footer } from './Footer.js'; 
import { CarUpload } from './CarUpload.js';
import { Routes, Route } from "react-router-dom";

// add imports for each page

// the prop is the JSON object that is passed in from index.js
// otherwise calls on all 3 pages and it will render which ever page
// is not commented out
function App(props) {
  return (
    <div className='container-fluid p-0'>
      

      <Header />
      <main>
      <Routes>
        <Route index element={<Home carData={props.props}/>} />
        <Route path="Compare" element={<CompareApp props={props.props} />}/>
        <Route path="Upload" element={<CarUpload props={props.props} />}/>
        <Route path="Moreinformation" element={<MoreInformation carData={props.props}/>}/>
        <Route path="*" element={<Home carData={props.props}/>} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;