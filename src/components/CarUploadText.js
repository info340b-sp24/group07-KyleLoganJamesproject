import React from 'react';
import { CarUploadDirections } from './CarUploadDirections';

export function CarUploadText(){

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
                    <option value="insert">Car Category</option>
                    <option value="truck">Truck</option>
                    <option value="sedan">Sedan</option>
                    <option value="sports">Sports</option>
                    <option value="luxury">Luxury</option>
                    <option value="suv">SUV</option>
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
                    <option value="insert">Luxury Scale</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>
                </form>
            </div>
            <div className="col-md-6">
                <form action="#">
                <div className="form-group">
                    <label className="header-font" htmlFor="safetyScale">Safety Scale (1-5)</label>
                    <select className="form-control mb-3" id="safetyScale" name="safetyScale">
                    <option value="insert">Safety Scale</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                </div>
                </form>
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