import React from 'react';

const UploadButton = () => {
  const handleUpload = () => {
    alert('Uploading image...');
  };

  return (
    <button className="upload-button" onClick={handleUpload}>
      Upload Image
    </button>
  );
};

export default UploadButton;