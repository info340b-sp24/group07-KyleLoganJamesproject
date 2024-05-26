import React, { useState, useEffect } from 'react';
import { CarUploadDirections } from './CarUploadDirections';
import { getDatabase, ref, onValue, push as FirebasePush } from 'firebase/database';

export function CarUploadText() {
    const carTypes = ["Car Category", "Truck", "Sedan", "Sports", "Luxury", "SUV"];

    const categoryOptions = carTypes.map((carType, index) => (
        <option key={index} value={carType}>{carType}</option>
    ));

    const luxuryOptions = [<option key={0} value={"insert"}>{"Luxury Scale"}</option>];
    for (let i = 1; i <= 10; i++) {
        luxuryOptions.push(<option key={i} value={i}>{i}</option>);
    }

    const safetyScale = [<option key={0} value={"insert"}>{"Safety Scale"}</option>];
    for (let i = 1; i <= 5; i++) {
        safetyScale.push(<option key={i} value={i}>{i}</option>);
    }

    const [carState, setCarState] = useState("");
    const [categoryState, setCategoryState] = useState("");
    const [mghState, setMghState] = useState("");
    const [priceState, setPriceState] = useState("");
    const [luxuryState, setLuxuryState] = useState("");
    const [safetyState, setSafetyState] = useState("");
    const [webState, setWebState] = useState("");
    const [descState, setDescState] = useState("");

    
    const handleCarNameChange = (event) => {
        const newValue = event.target.value
        setCarState(newValue);
    }
    
    const handleCategoryChange = (event) => {
        const newValue = event.target.value
        setCategoryState(newValue);
    }

    const handleMghChange = (event) => {
        const newValue = event.target.value
        setMghState(newValue);
    } 

    const handlePriceChange = (event) => {
        const newValue = event.target.value
        setPriceState(newValue);
    }
    
    const handleLuxuryChange = (event) => {
        const newValue = event.target.value
        setLuxuryState(newValue);
    }
    const handleSafetyChange = (event) => {
        const newValue = event.target.value
        setSafetyState(newValue);
    }

    const handleWebChange = (event) => {
        const newValue = event.target.value
        setWebState(newValue);
    }
    const handleDescChange = (event) => {
        const newValue = event.target.value
        setDescState(newValue);
    }
    
    const carDataUrl = "/";

    const db = getDatabase();
    const carDataRef = ref(db, carDataUrl);
    
    useEffect(() => {

        const offFunction = onValue(carDataRef, function(snapshot) {
            const allCarDataObj = snapshot.val();
            console.log(allCarDataObj);
        });

        function cleanup() {
            console.log("Component is being removed")
            offFunction();
        }
        return cleanup;
    }, [carDataRef]); // useEffect will run again once the value of carDataRef changes

    const addCar = (event) => {
        // Overrides the browser sending the form data to the current URL and refreshing the page
        event.preventDefault();

        const newUploadObj = {
            "car_name": carState,
            "description": descState,
            "type": categoryState,
            "link": webState,
            "image": null,
            "price": priceState,
            "luxury_scale": luxuryState,
            "safety_rating": safetyState,
            "MPG": mghState
        };

        FirebasePush(carDataRef, newUploadObj);
    };

    return (
        <div className="right-section text-center">
            <CarUploadDirections />
            <div className="row">
                <div className="col-md-6">
                    <h3 className="header-font">Car Name</h3>
                    <input type="text" className="form-control mb-3" placeholder="Car Name" value={carState} onChange={handleCarNameChange} />
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="header-font" htmlFor="carCategory">Car Category</label>
                        <select className="form-control mb-3" id="carCategory" name="carCategory" value={categoryState} onChange={handleCategoryChange}>
                            {categoryOptions}
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <h3 className="header-font">Mile Per Gallon (MPG)</h3>
                    <input type="text" className="form-control mb-3" placeholder="MPG" value={mghState} onChange={handleMghChange} />
                </div>
                <div className="col-md-6">
                    <h3 className="header-font">Price</h3>
                    <input type="text" className="form-control mb-3" placeholder="Price" value={priceState} onChange={handlePriceChange} />
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="header-font" htmlFor="luxuryScale">Luxury Scale (1-10)</label>
                        <select className="form-control mb-3" id="luxuryScale" name="luxuryScale" value={luxuryState} onChange={handleLuxuryChange}>
                            {luxuryOptions}
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="header-font" htmlFor="safetyScale">Safety Scale (1-5)</label>
                        <select className="form-control mb-3" id="safetyScale" name="safetyScale" value={safetyState} onChange={handleSafetyChange}>
                            {safetyScale}
                        </select>
                    </div>
                </div>
                <div className="col-md-12">
                    <h3 className="header-font">Webpage Link</h3>
                    <input type="text" className="form-control mb-3" placeholder="Paste the Webpage Link" value={webState} onChange={handleWebChange} />
                </div>
                <div className="col-md-12">
                    <h3 className="header-font">Description</h3>
                    <textarea className="form-control mb-3" placeholder="Enter the Car's Description" value={descState} onChange={handleDescChange} />
                </div>
            </div>
            <div>
                <form onSubmit={addCar}>
                    <button className="btn btn-primary" type="upload">
                        <a className="text-white text-decoration-none" href="App.js">Upload</a>
                   </button>
                </form>
            </div>
        </div>
    );
}