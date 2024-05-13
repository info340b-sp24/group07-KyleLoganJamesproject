import React from 'react';
import { CompareCardBody } from './CompareCardBody.js';

export function CompareCard(props) {
    return(
        <div className="comparison-cardMargin d-flex flex-column">
            {/* <!-- this represents the search bar of car 1.--> */}
            <form className="comparison-searchPosition d-flex flex-column">
                <h2 className="comparison-searchCarTitle">Car 1</h2>

                <div className="text-left comparison-searchBar">
                    
                    <div className="form-group mb-3 comparison-col-3">
                    <input type="CarName" className="form-control text-left p-3" aria-describedby="Form to enter car name"
                        placeholder="Search Vehicle 1"></input>
                    {/* <!-- later implement it to link to car they search for --> */}
                    <button className="searchButtonSize" type="submit">Search Car #1</button>

                    {/* <!-- the cards starts here, uses border-secondary to acheive black outline --> */}
                    <div className="card border-secondary">
                        <CompareCardBody props={props}/>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )   
}