import "./Footer.css";
import logo from "../assets/light-logo1(1).png"; // 🔥 सही path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-logo-area">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page
          when looking at its layout. The point of using lorem ipsum. It is a long established fact that a
          reader will be distracted by the readable content of a page when looking at its layout. The point
          of using lorem ipsum.
        </p>
      </div>

      <div className="footer-section footer-links">
        <h4>Usefull Links</h4>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>FAQ</li>
          <li>Shop</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="footer-section footer-subscribe">
        <h4>Subscribe</h4>
        <p>
          Enter your email below to be the first to know about new collections and product launches.
        </p>
        <div className="subscribe-box">
          <input type="email" placeholder="Your Email..." />
          <button>&rarr;</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
