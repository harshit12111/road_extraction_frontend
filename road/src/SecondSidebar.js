import React, { useState } from 'react';
import './SecondSidebar.css';
import Overlay from './Overlay'; // Import the overlay component

const SecondSidebar = ({ onClose }) => {
  const [overlayImage, setOverlayImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setOverlayImage(imageUrl); // Set the clicked image URL to display in the overlay
  };

  const handleCloseOverlay = () => {
    setOverlayImage(null); // Close the overlay by resetting the state
  };

  return (
    <div className="second-sidebar">
      <button onClick={onClose} className="close-btn">Close</button>

      <h2>before date :8 march 2024</h2>
      <img
        src="/1.png"
        className="image"
        onClick={() => handleImageClick('/1.png')}
        alt="Before"
      />
      

      <h2>after date :25 april 2024</h2>
      <img
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        className="image"
        onClick={() => handleImageClick('https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg')}
        alt="After"
      />

      <h2>detected change</h2>
      <img
        src="https://daluscapital.com/wp-content/uploads/2016/04/dummy-post-square-1-1.jpg"
        className="image"
        onClick={() => handleImageClick('https://daluscapital.com/wp-content/uploads/2016/04/dummy-post-square-1-1.jpg')}
        alt="Detected Change"
      />

      {overlayImage && <Overlay imageUrl={overlayImage} onClose={handleCloseOverlay} />}
    </div>
  );
};

export default SecondSidebar;
