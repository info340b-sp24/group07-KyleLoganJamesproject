import React, { useState, useEffect }from 'react';
import { CompareCardBody } from './CompareCardBody.js';

export function CompareCard(props) {
    // then develop a state variable where we see if the form has been inputed yet
    // if its not we want to display a default car card
    // but then once we see its updated we want to filter for the right car then pass that object in
    // to the car card component. 

    

    // console.log(props)

    // string variables for card displays
    const cardNumber = "Car" + props.car;
    const cardSearchNumber = "Car #" + props.car;
    const cardVehicleNumber = "Search Vehicle " + props.car;

    // handle state now of searching car
    const [car, setCar] = useState('');
    const [searchOrNot, setSearchOrNot] = useState(false);

    // handling car input, should search props array of car for a specific car inputted
    // implement auto compleate as it goes? (goal) - could also swap to drop down menu of cars
    const handleCarInput = (event) => {
        const input = event.target.value;
        setCar(input);
        setSearchOrNot(true);

        if(input === ""){
            setSearchOrNot(false);
        }
    }
    
    // searches for a car in the json file
    const searchedCar = props.props.props.props.filter((searchCar) => {
        return searchCar.car_name === car;
    });

    // shows for all cars in our json file 
    const optionElems = props.props.props.props.map((cars, index) => {
        return <option key={index} value={cars.car_name}>{cars.car_name}</option>
    });

    // when passing the prop into comapreCardBody, that should be a indivual car object
    return(
        <div className="comparison-cardMargin d-flex flex-column">
            {/* <!-- this represents the search bar of car 1.--> */}
            <form className="comparison-searchPosition d-flex flex-column">
                <h2 className="comparison-searchCarTitle">{cardNumber}</h2>

                <div className="text-left comparison-searchBar">
                    
                    <div className="form-group mb-3 comparison-col-3">
                        <select id="teamSelect" className="comparison-carSearchBar form-control text-left p-3" aria-describedby="Form to enter car name" placeholder={cardVehicleNumber} onChange={handleCarInput} value={car}>
                            <option value="">Select {cardSearchNumber} </option>
                            {optionElems}
                        </select>

                    {/* <!-- the cards starts here, uses border-secondary to acheive black outline --> */}
                    <div className="card border-secondary">
                        <CompareCardBody props={searchedCar[0]} searched={searchOrNot}/>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )   
}


// old car search bar
{/* <input type="CarName" className="form-control text-left p-3" aria-describedby="Form to enter car name" placeholder={cardVehicleNumber} onChange={handleCarInput}></input> */}
{/* <!-- later implement it to link to car they search for --> */}
{/* <button className="searchButtonSize" type="submit" onClick={handleCarSearch}>{cardSearchNumber}</button> */}