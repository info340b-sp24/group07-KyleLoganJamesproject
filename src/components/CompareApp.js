import React from 'react';
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
            <div className="comparison-vsFlex flex-item comparison-cardMargin">
                <img className="comparison-vsImage" src="page_images/vs-versus-text-logo-battle-fight-game-flat-cartoon-symbol_101884-738.avif" alt="Versus Logo"></img>
            </div>

            <CompareCard props={props} car={2}/>
        </div> 
    )
}
