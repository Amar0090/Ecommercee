import React from "react";
import "./Card5.css";
import capImage from "../assets/Rectangle56(1).png";

const Card5 = () => {
  return (
    <section className="card5-section">
      <div className="card5-container">
        <div className="card5-image">
          <img src={capImage} alt="Cap with embroidery" />
        </div>
        <div className="card5-content">
          <h2>
            Custom Hats, Polos, T-Shirts & More – Expert <br />
            Embroidery & Printing Services
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page
            when looking at its layout. The point of using lorem ipsum. It is a long established fact that a
            reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem ipsum.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page
            when looking at its layout. The point of using lorem ipsum. It is a long established fact that a
            reader will be distracted by the readable content of a page
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card5;
