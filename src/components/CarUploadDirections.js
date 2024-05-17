import React from 'react';

// this just displays the directions for uploading a car, can put into other card
// but i think having it separate is better for organization
export function CarUploadDirections(){
    return (
        <div>
            <h2>Directions</h2>
            <p>Upload a picture of the car by having it face <em>towards</em> or <em>diagonally</em> to the camera. Make sure to fill out the information below as well! The scale is arranged so that a lower number corresponds to a lower rating, while higher number corresponds to a higher rating.</p>
        </div>
    )
}