import React from 'react';
import { CarPicture } from './CarPicture';
import { CarUploadText } from './CarUploadText';


export function CarUpload (props) {
  return (
    <div className="d-flex justify-space-evenly">
    
      <CarPicture props={props}/>
      <CarUploadText props={props}/>

        
    </div>
  );
}