import React from 'react'; //import React library
import { CompareApp } from './CompareApp'; //import CompareApp from CompareApp.js

// add imports for each page

// the prop is the JSON object that is passed in from index.js
// otherwise calls on all 3 pages and it will render which ever page
// is not commented out
export function App(props) {
  return (
    <div>
      {/* < home page/> */}
      <CompareApp props={props} />
      {/* <insert car page /> */}
    </div>
  )
}