import React from "react"
import "./TargetAudience.css"

const TargetAudience: React.FC = () => {
  return (
    <section className="audience-section section grid-texture" id="audience">
      <div className="container">
        <div className="audience-header fade-up">
          <h2 className="section-title">Designed for every German learner</h2>
          <p className="section-subtitle">
            Fun German learning tailored to your real-life goals.
          </p>
        </div>

        <div className="audience-cards">
          <div className="audience-card fade-up-1">
            <div className="audience-img-wrapper dark-border">
              <span className="emoji-huge" aria-hidden="true">🛫</span>
            </div>
            <h3>Exchange Students & Expats</h3>
            <p>Moving to Germany, Austria, or Switzerland? Get comfortable ordering a Döner, renting a flat, and making friends.</p>
          </div>

          <div className="audience-card fade-up-2">
            <div className="audience-img-wrapper orange-border">
              <span className="emoji-huge" aria-hidden="true">🎓</span>
            </div>
            <h3>Exam Takers</h3>
            <p>Our structured A1 to C2 German course helps you prepare efficiently for Goethe, testDaF, and other official certificates.</p>
          </div>

          <div className="audience-card fade-up-3">
            <div className="audience-img-wrapper blue-border">
              <span className="emoji-huge" aria-hidden="true">🧗‍♀️</span>
            </div>
            <h3>Hobbyists</h3>
            <p>Just learning for fun? Visual gamified mechanics keep you motivated without making it feel like a chore.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TargetAudience
