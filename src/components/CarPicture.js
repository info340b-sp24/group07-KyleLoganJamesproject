import React, { useState, useId, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Spinner, Alert } from 'react-bootstrap';

export function CarPicture(props) {
  const initialURL = "page_images/upload-car.png";
  const [imageUrl, setImageUrl] = useState(initialURL);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const pictureId = useId();

  useEffect(() => {
    props.applyCallBack(imageUrl);
  }, [imageUrl, props.applyCallBack]);

  const handleChange = async (event) => {
    if (event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0];
      setLoading(true);
      setError(null);
      try {
        const imageURL = "userImages/" + pictureId + ".png";
        const storage = getStorage();
        const imageRef = ref(storage, imageURL);
  
        await uploadBytes(imageRef, imageFile);
        const downloadUrlString = await getDownloadURL(imageRef);
        setImageUrl(downloadUrlString);
      } catch (error) {
        setError(error.message);
        console.error("Error uploading image: ", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClear = (event) => {
    setLoading(true); 
    setImageUrl(initialURL);
    setLoading(false);
    setError(null);
  };

  return (
    <div className="left-section text-center">
      <div className="row">
        <h2>Choose a Picture</h2>
        <form>
          <div className="mb-3">
            <input className="form-control" type="file" id="formFile" onChange={handleChange} />
          </div>
        </form>
        {error && ( <Alert variant="danger">{error}</Alert>)}
        <div className="card-body" aria-label="image icon uploading a car">
          {loading ? ( <Spinner animation="border" role="status" alt="Loading..."> <span className="sr-only">Loading...</span></Spinner>):(
            <img src={imageUrl} className="border border-secondary img-fluid" alt="user avatar preview" />
          )}
        </div>
        <div className="row mt-3">
          <div className="col d-flex justify-content-center">
            <form onClick={handleClear}>
              <button className="btn btn-secondary" type="clear" textvalue="Clear button">
                Clear Picture
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
