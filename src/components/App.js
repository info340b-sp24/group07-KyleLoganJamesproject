import React from 'react'; //import React library

// add imports for each page

// the prop is the JSON object that is passed in from index.js
// otherwise calls on all 3 pages and it will render which ever page
// is not commented out
export function App(props) {
    return (
      <div>
        <HomePage />
        {/* < home page/> */}
        {/* <compare page /> */}
        {/* <insert car page /> */}
      </div>
    )
  }