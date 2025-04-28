import React from 'react';

interface ImageDisplayProps {
  imageUrl1: string;
  imageUrl2: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl1, imageUrl2 }) => {
  return (
    <div className="image-display-container">
      <div className="image-wrapper">
        <img src={imageUrl1} alt="Imagen 1" className="image" />
      </div>
      <div className="image-wrapper">
        <img src={imageUrl2} alt="Imagen 2" className="image" />
      </div>
    </div>
  );
};

export default ImageDisplay;