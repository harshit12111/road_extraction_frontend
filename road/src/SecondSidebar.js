import React from 'react';
import './SecondSidebar.css'; // Add necessary styling here

const SecondSidebar = ({ onClose }) => {
  return (
    <div className="second-sidebar">
      <button onClick={onClose} className="close-btn">
        Close
      </button>
      <h2>before</h2>
      <img src="https://daluscapital.com/wp-content/uploads/2016/04/dummy-post-square-1-1.jpg" className='before_image'></img>

      <h2>after</h2>
      <img src="https://daluscapital.com/wp-content/uploads/2016/04/dummy-post-square-1-1.jpg" className='before_image'></img>

      <h2>detected change</h2>
      <img src="https://daluscapital.com/wp-content/uploads/2016/04/dummy-post-square-1-1.jpg" className='before_image'></img>


    </div>
  );
};

export default SecondSidebar;
