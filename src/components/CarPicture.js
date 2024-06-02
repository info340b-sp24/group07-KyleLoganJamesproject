import React, { useState, useId, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export function CarPicture(props) {
  const [imageFile, setImageFile] = useState(null);
  const initialURL = "page_images/upload-car.png";
  const [imageUrl, setImageUrl] = useState(initialURL);
  const pictureId = useId();

  useEffect(() => {
    props.applyCallBack(imageUrl);
  }, [imageUrl, props.applyCallBack]);

  const handleChange = async (event) => {
    if (event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0];
      setImageFile(imageFile);

      const imageURL = `userImages/${pictureId}.png`;
      const storage = getStorage();
      const imageRef = ref(storage, imageURL);

      await uploadBytes(imageRef, imageFile);
      const downloadUrlString = await getDownloadURL(imageRef);
      setImageUrl(downloadUrlString);
    }
  };

  const handleClear = (event) => {
    setImageFile(null);
    setImageUrl(initialURL);
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
            <div className="card-body" aria-label="image icon uploading a car">
                <img src={imageUrl} className="border border-secondary img-fluid" alt="user avatar preview" />
            </div>
            <div className="row mt-3">
                <div className="col d-flex justify-content-center">
                    <form onClick={handleClear}>
                        <button className="btn btn-secondary" type="clear" textValue="Clear button">
                        Clear Picture
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}  