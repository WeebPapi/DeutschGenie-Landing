import React from "react"
import "./Footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">DeutschGenie</h3>
            <p>The premier visual German learning app. Learn German online with quick German lessons and engaging games.</p>
          </div>

          <div className="footer-links">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How it works</a></li>
              <li><a href="#audience">For Students & Expats</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Learn</h4>
            <ul>
              <li><a href="#">A1 to C2 German Course</a></li>
              <li><a href="#">German Placement Test</a></li>
              <li><a href="#">Learn German Past Tense</a></li>
              <li><a href="#">German Cases Explained</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DeutschGenie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
