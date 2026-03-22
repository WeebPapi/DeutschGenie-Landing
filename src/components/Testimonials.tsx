import React from "react"
import "./Testimonials.css"

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section section" id="testimonials">
      <div className="container">
        <div className="test-header fade-up">
          <h2 className="section-title">What our students say</h2>
          <p className="section-subtitle">Real results from people who found fun German learning through our visual German learning app.</p>
        </div>

        <div className="test-grid">
          <article className="test-card fade-up-1">
            <div className="test-profile">
              <span className="test-avatar" aria-hidden="true">👩‍🎨</span>
              <div>
                <strong>Sarah M.</strong>
                <span>B1 Student</span>
              </div>
            </div>
            <p>"I could never stick to regular textbooks. This visual German learning app finally made the vocabulary stick in my brain. The games are actually fun!"</p>
          </article>

          <article className="test-card test-card-blue fade-up-2">
            <div className="test-profile">
              <span className="test-avatar" aria-hidden="true">👨‍💼</span>
              <div>
                <strong>Lukas P.</strong>
                <span>A2 to B2</span>
              </div>
            </div>
            <p>"The German placement test accurately put me at A2. I've been doing quick German lessons on my commute and just passed my B2 mock exam."</p>
          </article>

          <article className="test-card fade-up-3">
            <div className="test-profile">
              <span className="test-avatar" aria-hidden="true">🧑‍🔬</span>
              <div>
                <strong>Elena K.</strong>
                <span>C1 Student</span>
              </div>
            </div>
            <p>"Even at an advanced level, learning German with games keeps me sharp. It's the best A1 to C2 German course I've found on mobile."</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
