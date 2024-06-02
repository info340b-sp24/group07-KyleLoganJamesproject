import React, { useState, useId } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export function CarPicture() {
  const [imageFile, setImageFile] = useState(null);
  const initialURL = "page_images/upload-car.png";
  const [imageUrl, setImageUrl] = useState(initialURL);
  const pictureId = useId();

  // Image uploading!
  const handleChange = (event) => {
    if (event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0];
      setImageFile(imageFile);
      setImageUrl(URL.createObjectURL(imageFile));
    }
};

const handleImageUpload = async () => {
    if (!imageFile) {
        console.error("No image file selected");
        return;
    }

    const imageURL = `userImages/${pictureId}.png`;
    
    console.log("Uploading", imageFile);
    const storage = getStorage();
    const imageRef = ref(storage, imageURL);
    
    try {
        await uploadBytes(imageRef, imageFile);
    } catch(err) {
        console.log(err); // log any errors for debugging
    }

    // Get the URL to this uploaded file so we can reference it from the web
    const downloadUrlString = await getDownloadURL(imageRef);
    console.log(downloadUrlString);
  };

  const handleClear = () => {
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
                <div className="col">
                    <form onClick={handleImageUpload}>
                        <button className="btn btn-primary" type="submit">
                        Submit Picture
                        </button>
                    </form>
                </div>
                <div className="col">
                    <form onClick={handleClear}>
                        <button className="btn btn-secondary" type="clear">
                        Clear Picture
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}  