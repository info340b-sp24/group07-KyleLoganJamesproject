import React, { useState }from 'react';
import { CompareCardBody } from './CompareCardBody.js';
import { CompareFilter } from './CompareFilter.js';
import { CompareSelectBar } from './CompareSelectBar.js';


export function CompareCard(props) {
    // console.log(props)

    // string variables for card displays
    const cardNumber = "Car " + props.car;
    const cardSearchNumber = "Car #" + props.car;
    const cardVehicleNumber = "Search Vehicle " + props.car;
    // handle state now of searching car
    const [car, setCar] = useState('');
    const [searchOrNot, setSearchOrNot] = useState(false);
    const [carCategory, setCarCategory] = useState("Unfiltered"); 
    
    // searches for a car in the json file
    const searchedCar = props.props.props.props.filter((searchCar) => {
        return searchCar.car_name === car;
    });

    // apply filter to car category
    function applyFilter(carType){
        setCarCategory(carType)
    }

    // apply car to update state
    function applyCar(carName){
        setCar(carName)
    }

    // apply search to update state
    function applySearch(search){
        setSearchOrNot(search)
    }

    // when passing the prop into comapreCardBody, that should be a indivual car object
    return(
        <div className="comparison-cardMargin d-flex flex-column">
            {/* <!-- this represents the search bar of car 1.--> */}
            <form className="comparison-searchPosition d-flex flex-column">
                <h2 className="comparison-searchCarTitle">{cardNumber}</h2>

                <CompareFilter props={props} applyFilterCallback={applyFilter}/>

                <div className="text-left comparison-searchBar">
                    
                    
                    <div className="form-group mb-3 comparison-col-3">
                        <CompareSelectBar carCategory={carCategory} props={props} cardVehicleNumber={cardVehicleNumber} cardSearchNumber={cardSearchNumber} car={car} applyCarCallBack={applyCar} applySearchCallBack={applySearch}/>
                        
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