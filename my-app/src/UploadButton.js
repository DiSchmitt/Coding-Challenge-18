//Not 100% sure what I was supposed to do for task 3 but here I guess:
import React from "react";

const UploadButton = () => {
  const handleUpload = () => {
    alert("Uploading image...");
  };

  return (
    <button className="upload-button" onClick={handleUpload}>
      Upload Image
    </button>
  );
};

export default UploadButton;
