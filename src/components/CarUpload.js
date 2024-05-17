import React from 'react';
import { CarPicture } from './CarPicture';
import { CarUploadText } from './CarUploadText';


/**
 * Need to create an API to add  into the json file
 * @returns UI for the user to choose a picture to upload
 */
export function CarUpload (props) {
  return (
    <div className="d-flex justify-space-evenly">
    
    <CarPicture props={props}/>
    <CarUploadText props={props}/>

        
    </div>
  );
}