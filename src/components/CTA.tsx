import React from "react"
import "./CTA.css"

const CTA: React.FC = () => {
  return (
    <section className="cta-section section" id="cta">
      <div className="container">
        <div className="cta-content fade-up">
          <h2 className="section-title">Ready to learn German fast?</h2>
          <p className="cta-subtitle">
            Join thousands of others mastering the language through our visual German learning app. Start your A1 to C2 German course today.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Download for iOS</button>
            <button className="btn btn-blue btn-large">Download for Android</button>
          </div>
          <div className="cta-trust">
            <span>✓ No credit card required</span>
            <span>✓ 5-minute German placement test</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
