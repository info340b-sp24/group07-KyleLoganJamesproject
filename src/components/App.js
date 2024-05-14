import React from 'react';
import { CompareApp } from './CompareApp';
import { Header } from './Header'; 
import { Footer } from './Footer.js'; 

// add imports for each page

// the prop is the JSON object that is passed in from index.js
// otherwise calls on all 3 pages and it will render which ever page
// is not commented out
export function App(props) {
  return (
    <div className='container-fluid p-0'>
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