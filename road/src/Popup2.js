import React from 'react';
import './Popup2.css'; // We'll create this CSS file next

const Popup2 = ({ message, onClose }) => {
  return (
    <div className="popup2">
      <div className="popup2-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup2;