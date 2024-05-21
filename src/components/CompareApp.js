import React from 'react';
import { CompareImage } from './CompareImage.js'; 
import { CompareCard } from './CompareCard.js'; 

export function CompareApp(props) {
    return (
        <div className="comparison-cardFlex d-lg-flex">
                
            <CompareCard props={props.props} car={1}/>

            <div className="comparison-vsFlex flex-item comparison-cardMargin">
                <img className="comparison-vsImage" src="page_images/vs-versus-text-logo-battle-fight-game-flat-cartoon-symbol_101884-738.avif" alt="Versus Logo"></img>
            </div>

            <CompareCard props={props.props} car={2}/>
        </div> 
    )
}
