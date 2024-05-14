import React from 'react';

export function CompareCardBody(props) {
    console.log(props);
    // if false, make everything a question mark, but if true, fill in car info as needed
    let carName = "?????";
    let category = "?";
    let price = "?";
    let mpg = "?";
    let luxury = "?";
    let saftey = "?";

    // link back to compare page(do this later with router)
    let link = "./CompareApp.js";
    let altTag = "A placeholder vehicle until a user searches for a vehicle";
    let carImage = "page_images/unknownCar.png";


    if(props.searched) {
        carName = props.props.car_name;
        category = props.props.type;
        price = "$"+ new Intl.NumberFormat('en-US').format(props.props.price);
        mpg = props.props.MPG + " MPG";
        luxury = props.props.luxury_scale;
        saftey = props.props.saftey_rating;
        link = props.props.link;
        carImage = props.props.image;
        altTag = props.props.car_name;
    }

    

    return(
        <div className="card-body">
            <img src={carImage} className="comparison-increaseCarHeight"
                alt={altTag}></img>
            {/* <!-- update to reflect the actual car searched up later --> */}
            <h5 className="card-title">{carName}</h5>

            {/* <!-- List for car elements --> */}
            <ul className="card-text text-black">
                <li>
                Car Category: {category}
                </li>
                <li>
                Price: {price}
                </li>
                <li>
                Miles Per Gallon: {mpg}
                </li>
                <li>
                Luxury Scale (1-10): {luxury}
                </li>
                <li>
                Saftey Rating: {saftey}
                </li>
            </ul>

            <a href={link} className="btn btn-primary">Official Webpage</a>
        </div>
    )   
}