import React from 'react';
import { CarPicture } from './CarPicture';
import { CarUploadText } from './CarUploadText';

// CarUpload acts as the parent-component to child-components CarPicture and CarUploadText
// Easier to format together than individually
export function CarUpload (props) {
  return (
      <div className="flex-container">
        <div className="row">
          <div className="col-md-6">
            <CarPicture props={props}/>
          </div>
          <div className="col-md-6">
          <CarUploadText imageUrl={props.imageUrl}/>
          </div>
        </div>
      </div>
  );
}