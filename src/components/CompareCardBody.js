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
            
            if(key === "type") { // category
                return carDetailsArray[0] = <li key={index}>Car Category: {props.props[key]}</li>
            } else if (key === "price") { // price
                return carDetailsArray[1] = <li key={index}>Price: ${props.props[key]}</li>
            } else if (key === "MPG") { // mpg
                return carDetailsArray[2] = <li key={index}>Miles Per Gallon: {props.props[key]} MPG</li>
            } else if (key === "luxury_scale") { // luxury
                return carDetailsArray[3] = <li key={index}>Luxury scale (1-10): {props.props[key]}</li>
            }  else if (key === "saftey_rating") { // saftey
                return carDetailsArray[4] = <li key={index}>Saftey Rating (1-5): {props.props[key]}</li>
            }
        });

    } else {
        carDetailsArray = carDetailsArray.map((key, index) => {
            if(index === 0) { // category
                return carDetailsArray[0] = <li key={index}>Car Category: ?</li>
            } else if (index === 1) { // price
                return carDetailsArray[1] = <li key={index}>Price: ?</li>
            } else if (index === 2) { // mpg
                return carDetailsArray[2] = <li key={index}>Miles Per Gallon: ?</li>
            } else if (index === 3) { // luxury
                return carDetailsArray[3] = <li key={index}>Luxury scale (1-10): ?</li>
            }  else if (index === 4) { // saftey
                return carDetailsArray[4] = <li key={index}>Saftey Rating (1-5): ?</li>
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