import React, { useState, useEffect }from 'react'; //import React library
import { Header } from './Header'; //import Header from Header.js
import Home from './Home';
import MoreInformation from './Moreinformation.js';

import { CompareApp } from './CompareApp.js';
import { Footer } from './Footer.js'; 
import { CarUpload } from './CarUpload.js';
import { Routes, Route } from "react-router-dom";
import { getDatabase, ref, set as firebaseSet, onValue, get } from 'firebase/database';

function App(props) {

  const [currentCars, setCurrentCars] = useState([props.props])

  const [data, setData] = useState([]);

  const db = getDatabase();
  const carRef = ref(db, "Cars");
  // console.log("messageRef: ", carRef)
  
  useEffect(() => {
    const offFunction = onValue(carRef, (snapshot) =>{
      const newMessageObj = snapshot.val();
      console.log(newMessageObj);


      const allCars = snapshot.val();
      const allKeys = Object.keys(allCars);

      const carArray = allKeys.map((key) => {
        const singleCar = {...allCars[key]}
        singleCar.key = key;
        return singleCar;
      });


     const updateCars = [...data, carArray];
     setData(updateCars); //update state and re-render
    
     function cleanup() {
      offFunction();
     }
     return cleanup;
    })
  }, []);

  // console.log(data);
  // console.log("props in App: ", props.props);

  



  return (
    <div className='container-fluid p-0'>
      

      <Header />
      <main>
      <Routes>
        <Route index element={<Home carData={props.props}/>} />
        <Route path="Compare" element={<CompareApp props={data} />}/>
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