import React from 'react'; //import React library
// import { CompareApp } from './CompareApp'; //import CompareApp from CompareApp.js
import { Header } from './Header'; //import Header from Header.js
import Home from './Home';
import MoreInformation from './Moreinformation';
import { TopOfHomePage } from './Home';
import React from 'react';
import { CompareApp } from './CompareApp';
import { Header } from './Header'; 
import { Footer } from './Footer.js'; 

// add imports for each page

// the prop is the JSON object that is passed in from index.js
// otherwise calls on all 3 pages and it will render which ever page
// is not commented out
function App(props) {
  return (
    <div className='container-fluid p-0'>
      
      {/* <Header props={props} /> */}
      {/* < home page/> */}
      <Home carData={props.props}/>
      {/* <MoreInformation carData={props.props}/> */}
      {/* <CompareApp props={props} /> */}
      {/* <insert car page /> */}
      <Header />
      <main>
        {/* < home page/> */}
        <CompareApp props={props} />
        {/* <insert car page /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App;