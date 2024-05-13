import React from 'react';
import { Footer } from './Footer.js'; 
import { CompareImage } from './CompareImage.js'; 
import { CompareCard } from './CompareCard.js'; 

export function CompareApp(props) {

    // First step, develop a car card component first (it takes a car object prop)

    // then develop a state variable where we see if the form has been inputed yet
    // if its not we want to display a default car card
    // but then once we see its updated we want to filter for the right car then pass that object in
    // to the car card component. 
    
    // refer to lecture to see a drop down menu or autocompleate menu


    return (
        <div>
            {/* <!-- div for making the card, logo and card into a flex container --> */}
            <div className="comparison-cardFlex d-lg-flex">

                <CompareCard props={props}/>
                {/* <!-- div for the vs logo in the center of the page --> */}
                <CompareImage props={props}/>

                {/* <!-- card 2 here --> */}
                <div className="comparison-cardFlex d-lg-flex">
                    {/* <!-- card 2--> */}
                    {/* <!--beggining getting the toyota prius information--> */}
                    <div className="comparison-cardMargin d-flex flex-column" style={{width: 23 + 'rem'}}>

                        {/* <!-- this represents the search bar of car 2.--> */}
                        <form className="comparison-searchPosition d-flex flex-column">
                        <h2 className="comparison-searchCarTitle">Car 2</h2>
                        <div className="text-left comparison-searchBar">
                            <div className="form-group mb-3 comparison-col-3">
                            <input type="CarName" className="form-control text-left p-3" aria-describedby="Form to enter car name"
                                placeholder="Search Vehicle 2"></input>
                            {/* <!-- later implement it to link to car they search for --> */}
                            <button className="searchButtonSize" type="submit">Search Car #2</button>

                            {/* <!-- the cards starts here, uses border-secondary to acheive black outline --> */}
                            <div className="card border-secondary">

                                {/* <!-- the cards body starts here with this div --> */}
                                <div className="card-body">
                                <img src="page_images/unknownCar.png" className="comparison-increaseCarHeight"
                                    alt="A placeholder vehicle until a user searches for a vehicle"></img>
                                {/* <!-- update to reflect the actual car searched up later --> */}
                                <h5 className="card-title">?????</h5>

                                {/* <!-- List for car elements the ? changes when a car is searched--> */}
                                <ul className="card-text text-black">
                                    <li>
                                    Car Category: ?
                                    </li>
                                    <li>
                                    Price: ?
                                    </li>
                                    <li>
                                    Miles Per Gallon: ?
                                    </li>
                                    <li>
                                    Luxury Scale (1-10): ? 
                                    </li>
                                    <li>
                                    Saftey Rating: ?
                                    </li>
                                </ul>

                                {/* <!-- link is updated after a car is searched currently links back to
                                compare page --> */}
                                <a href="compare-index.html" className="btn btn-primary">Official Webpage</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer props={props}/>
        </div> 
    )
}
