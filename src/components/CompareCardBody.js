import React from 'react';

export function CompareCardBody(props) {
    let carName = "Pick a car to compare!";
    let carImage ="page_images/unknownCar.png"
    let altTag = "A placeholder vehicle until a user searches for a vehicle";
    let link = "./CompareApp.js";

    
    let carDetailsArray = [
        "?", // 0
        "?", // 1
        "?", // 2
        "?", // 3
        "?", // 4
    ];

    if(props.searched) {
        const keys = Object.keys(props.props);
        console.log(props.props.car_name);
        carName = props.props.car_name;
        carImage = props.props.image;
        altTag = props.props.description;

        carDetailsArray = keys.map((key, index) => {
            let text = "";


            if(key === "type") { // category
                text = "Car Category: " + props.props[key];
            } else if (key === "price") { // price
                text = "Price: " + props.props[key];
            } else if (key === "MPG") { // mpg
                text = "Miles Per Gallon: " + props.props[key];
            } else if (key === "luxury_scale") { // luxury
                text = "Luxury Scale (1-10): " + props.props[key];
            }  else if (key === "saftey_rating") { // saftey
                text = "Saftey Rating (1-5): " + props.props[key];
            }
            
            if(text !== "") {
                return <li key={index}>{text}</li>
            }

            
        });

    } else {

        carDetailsArray = carDetailsArray.map((key, index) => {
            let text = "";
            if(index === 0) { // category
                text = "Car Category: ?";
            } else if (index === 1) { // price
                text = "Price: ?";
            } else if (index === 2) { // mpg
                text = "Miles Per Gallon: ?";
            } else if (index === 3) { // luxury
                text = "Luxury Scale (1-10): ?";
            }  else if (index === 4) { // saftey
                text = "Saftey Rating (1-5): ?";
            }

            if(text !== "") {
                return <li key={index}>{text}</li>
            }

        });
    }

    return (
        <div className="card-body">
            <img src={carImage} className="comparison-increaseCarHeight"
                alt={altTag}></img>
            {/* <!-- update to reflect the actual car searched up later --> */}
            <h5 className="card-title">{carName}</h5>

            {/* <!-- List for car elements --> */}
            <ul className="card-text text-black">
                {carDetailsArray}
            </ul>

            <a href={link} className="btn btn-primary">Official Webpage</a>
        </div>
    )   
}