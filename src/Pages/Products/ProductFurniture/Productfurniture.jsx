import React from 'react';
import './Productfurniture.css'; // Import your custom CSS file

const Productfurniture = () => {
  return (
    <div className="product-furniture-wrapper">
      {/* Background and Overlay */}
      <div className="bg-image"></div>
      <div className="bg-overlay"></div>

      {/* Coming Soon Message */}
      <div className="coming-soon-container">
        <h1>Coming Soon...</h1>
      </div>
    </div>
  );
};

export default Productfurniture;
