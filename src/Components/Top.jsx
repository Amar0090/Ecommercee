import React from 'react';
import './Top.css';

function Top() {
  return (
    <>
      <section className="testimonials-section">
        <div className="testimonials-header">
          <h2>Testimonials</h2>
          <div className="nav-buttons">
            <button>&larr;</button>
            <button>&rarr;</button>
          </div>
        </div>

        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
            <p className="review-text">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem ipsum.
            </p>
            <div className="profile">
              <img src="src/assets/Rectangle 22 (1).png" />
              <div>
                <h4>Jenny Wilson</h4>
                <span>Fashion Designer</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
            <p className="review-text">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem ipsum.
            </p>
            <div className="profile">
              <img src="src/assets/Rectangle 22 (1).png" />
              <div>
                <h4>Jenny Wilson</h4>
                <span>Fashion Designer</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
            <p className="review-text">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem ipsum.
            </p>
            <div className="profile">
              <img src="src/assets/Rectangle 22 (1).png" />
              <div>
                <h4>Jenny Wilson</h4>
                <span>Fashion Designer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Top;
