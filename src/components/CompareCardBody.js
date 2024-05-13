import React from 'react';

export function CompareCardBody(props) {
    return(
        <div className="card-body">
            <img src="car_images/2024-toyota-prius.png" className="comparison-increaseCarHeight"
                alt="A Toyota Prius"></img>
            {/* <!-- update to reflect the actual car searched up later --> */}
            <h5 className="card-title">Toyota Prius AWD Sedan</h5>

            {/* <!-- List for car elements --> */}
            <ul className="card-text text-black">
                <li>
                Car Category: Hybrid
                </li>
                <li>
                Price: $24,525
                </li>
                <li>
                Miles Per Gallon: 54 MPG
                </li>
                <li>
                Luxury Scale (1-10): 5
                </li>
                <li>
                Saftey Rating: 3
                </li>
            </ul>

            <a href="https://www.toyota.com/prius/" className="btn btn-primary">Official Webpage</a>
        </div>
    )   
}