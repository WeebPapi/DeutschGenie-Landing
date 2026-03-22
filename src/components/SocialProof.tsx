import React from "react";
import "./SocialProof.css";

const SocialProof: React.FC = () => {
  return (
    <section className="social-proof-section section" aria-label="Social Proof">
      <div className="container">
        <div className="social-proof-content fade-up">
          <p className="social-proof-text">
            Join <strong>50,000+</strong> students who learn German fast and
            visual
          </p>
          <div className="avatar-group">
            <span className="avatar">👩‍🎓</span>
            <span className="avatar">👨‍💻</span>
            <span className="avatar">👩‍🏫</span>
            <span className="avatar">🚀</span>
          </div>
          <div className="rating">
            <span className="stars">★★★★★</span>
            <span className="rating-text">4.8/5 on App Store</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
