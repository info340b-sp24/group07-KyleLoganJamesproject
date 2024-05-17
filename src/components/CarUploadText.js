import React from 'react';
import { CarUploadDirections } from './CarUploadDirections';

// this is where you will define all of the forms for uploading to the car,
// any extra components for the options should be rendered on this page
export function CarUploadText(){
    const carTypes = ["Car Category", "Truck", "Sedan", "Sports", "Luxury", "SUV"];

    const categoryOptions = carTypes.map((carType) => {
        return (
            <option value={carType}>{carType}</option>
        )
    });

    const luxuryOptions = [<option value={"insert"}>{"Luxury Scale"}</option>];
    for(let i = 1; i <= 10; i++){
        luxuryOptions.push(<option value={i}>{i}</option>);
    }

    const safetyScale = [<option value={"insert"}>{"Safety Scale"}</option>];
    for(let i = 1; i <= 5; i++){
        safetyScale.push(<option value={i}>{i}</option>);
    }




    return (
        <div className="col-md-6 right-section text-center">
            <CarUploadDirections />

            <div className="row">
            <div className="col-md-6">
                <h3 className="header-font"> Car Name</h3>
                <input type="text" className="form-control mb-3" placeholder="Car Name" />
            </div>
            <div className="col-md-6">
                <form action="#">
                <div className="form-group">
                    <label className="header-font" htmlFor="carCategory">Car Category</label>
                    <select className="form-control mb-3" id="carCategory" name="carCategory">
                        {categoryOptions}
                    </select>
                </div>
                </form>
            </div>
            <div className="col-md-6">
                <h3 className="header-font">Mile Per Gallon (MGH)</h3>
                <input type="text" className="form-control mb-3" placeholder="MGH" />
            </div>
            <div className="col-md-6">
                <h3 className="header-font">Price</h3>
                <input type="text" className="form-control mb-3" placeholder="Price" />
            </div>
            <div className="col-md-6">
                <form action="#">
                <div className="form-group">
                    <label className="header-font" htmlFor="luxuryScale">Luxury Scale (1-10)</label>
                    <select className="form-control mb-3" id="luxuryScale" name="luxuryScale">
                    {luxuryOptions}
                    </select>
                </div>
                </form>
            </div>
            <div className="col-md-6">
                <form action="#">
                <div className="form-group">
                    <label className="header-font" htmlFor="safetyScale">Safety Scale (1-5)</label>
                    <select className="form-control mb-3" id="safetyScale" name="safetyScale">
                        {safetyScale}
                    </select>
                </div>
                </form>
            </div>

            <div className="col-md-12">
                <h3 className="header-font">Description</h3>
                <textarea className="form-control mb-3" placeholder="Enter car description" />
            </div>

        </div>
            <div>
            <button className="btn btn-primary" type="upload">
                <a className="text-white text-decoration-none" href="App.js">Upload</a>
            </button>
            </div>
        </div>
    )
}