import React from 'react';
import { CompareImage } from './CompareImage.js'; 
import { CompareCard } from './CompareCard.js'; 

export function CompareApp(props) {

    // First step, develop a car card component first (it takes a car object prop)
    // pass the props (car array) into the compareCard component and in there
    // state variables will be made to filter between the cars
    // refer to lecture to see a drop down menu or autocompleate menu

    
    return (
        <div className="comparison-cardFlex d-lg-flex">
                
            <CompareCard props={props} car={1}/>
            {/* <!-- div for the vs logo in the center of the page --> */}
            <CompareImage />

            <CompareCard props={props} car={2}/>
        </div> 
    )
}
