import React from 'react';

// add a picture of a car to the page
export function CarPicture(props) {
    // TODO: upload a photo to storage and save the URL to the database

  return (
        <div className="left-section text-center">
            <div className="row">
                <h2>Choose a Picture</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label"></label>
                        <input className="form-control" type="file" id="formFile"></input>
                    </div>
                </form>
                <div className="card-body" aria-label="image icon uploading a car">
                    <img src="page_images/upload-car.png" className="border border-secondary img-fluid" alt="uploading a car"></img>
                </div>
            </div>
        </div>
  )
}