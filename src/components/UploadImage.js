import React from 'react';

/**
 * Need to create an API to add images into the json file
 * @returns UI for the user to choose a picture to upload
 */
export const uploadImage = (props) => {
    return (
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
    )
};