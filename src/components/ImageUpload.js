import React from 'react';

/**
 * Need to create an API to add images into the json file
 * @returns UI for the user to choose a picture to upload
 */
export const UploadImage = (props) => {
    return (
        <div>
            <div className="col-md-6">
                <section className="left-section text-center">
                    <div>
                        <h2>Choose a Picture</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label"></label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                        </form>
                        <div className="card-body" aria-label="image icon uploading a car">
                            <img src="page_images/upload-car.png" className="border border-secondary img-fluid" alt="uploading a car" />
                        </div>
                    </div>
                </section>
            </div>

            <div className="col-md-6">
                <section className="right-section text-center">
                    <div>
                        <h2>Directions</h2>
                        <p>Upload a picture of the car by having it face <em>towards</em> or <em>diagonally</em> to the camera. Make sure to fill out the information below as well! The scale is arranged so that a lower number corresponds to a lower rating, while higher number corresponds to a higher rating.</p>
                    </div>
                    <div className="row">
                        {<><div className="col-md-6">
                            <h3 className="header-font"> Car Name</h3>
                            <input type="text" className="form-control mb-3" placeholder="Car Name" />
                        </div><div className="col-md-6">
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
                            </div><div className="col-md-6">
                                <h3 className="header-font">Mile Per Gallon (MGH)</h3>
                                <input type="text" className="form-control mb-3" placeholder="MGH" />
                            </div><div className="col-md-6">
                                <h3 className="header-font">Price</h3>
                                <input type="text" className="form-control mb-3" placeholder="Price" />
                            </div><div className="col-md-6">
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
                            </div><div className="col-md-6">
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
                            </div></>}
                    </div>
                    <div>
                        <button className="btn btn-primary" type="upload">
                            <a className="text-white text-decoration-none" href="App.js">Upload</a>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};