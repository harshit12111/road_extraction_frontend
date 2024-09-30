import React from 'react';
import './Overlay.css'; // Add necessary styling for overlay

const Overlay = ({ imageUrl, onClose }) => {
  return (
    <div className="overlay">
      <button className="overlay-close-btn" onClick={onClose}>X</button>
      <div className="image-container">
        <img src={imageUrl} alt="Enlarged" className="overlay-image" />
      </div>
    </div>
  );
};

export default Overlay;