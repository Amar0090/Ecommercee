// src/Components/Card.jsx
import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-item">
        <p className="bold-text">Hand Picked Best Seller</p>
        <hr className="line" />
        <p>- Same Time</p>
        <p className="bottom-text">Tested by Thousands of Brands</p>
      </div>

      <div className="card-item center">
        <h3>Easy Online Ordering</h3>
        <div className="steps">
          <span>1 Select Items</span>
          <span>2 Add to Cart</span>
          <span>3 Checkout</span>
        </div>
      </div>

      <div className="card-item">
        <p className="bold-text">No Minimum</p>
        <hr className="line" />
        <p>Free Delivery</p>
        <p className="bottom-text">No Extra Charges</p>
      </div>
    </div>
  );
};

export default Card;
