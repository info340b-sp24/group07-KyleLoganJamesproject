import React from 'react';
import { CarPicture } from './CarPicture';
import { CarUploadText } from './CarUploadText';


export function CarUpload (props) {
  return (
      <div className="flex-container">
        <div className="row">
          <div className="col-md-6">
            <CarPicture props={props}/>
          </div>
          <div className="col-md-6">
            <CarUploadText props={props}/>
          </div>
        </div>
      </div>
  );
}