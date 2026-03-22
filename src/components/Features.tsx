import React from "react"
import "./Features.css"

const Features: React.FC = () => {
  return (
    <section className="features-section section grid-texture" id="features">
      <div className="container">
        <div className="features-header fade-up">
          <span className="badge badge-orange">Visual German learning app</span>
          <h2 className="section-title">Learn German with games, not grammar books</h2>
          <p className="section-subtitle">
            Say goodbye to boring textbooks. Our visual approach helps you memorize vocabulary and grammar intuitively.
          </p>
        </div>

        <div className="features-grid">
          <article className="feature-card fade-up-1">
            <div className="feature-icon" aria-hidden="true">🎮</div>
            <h3>Quick German lessons</h3>
            <p>Bite-sized, 5-minute sessions perfect for your daily commute. Play mini-games to unlock new vocabulary.</p>
          </article>

          <article className="feature-card feature-card-blue fade-up-2">
            <div className="feature-icon" aria-hidden="true">👁️</div>
            <h3>Visual & Intuitive</h3>
            <p>Every word is paired with memorable illustrations. Learn context and meaning without translating in your head.</p>
          </article>

          <article className="feature-card fade-up-3">
            <div className="feature-icon" aria-hidden="true">📈</div>
            <h3>A1 to C2 German course</h3>
            <p>Whether you're starting from scratch or preparing for your C2 exam, our curriculum scales to your level.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Features
