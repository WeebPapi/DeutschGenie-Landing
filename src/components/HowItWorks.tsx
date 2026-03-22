import React from "react"
import "./HowItWorks.css"

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works-section section" id="how-it-works">
      <div className="container">
        <div className="hiw-header fade-up">
          <h2 className="section-title">From absolute beginner to fluent speaker</h2>
          <p className="section-subtitle">Your journey to speaking German fast is just three steps away.</p>
        </div>

        <div className="steps-container">
          <div className="step-item fade-up-1">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Take the German placement test</h3>
              <p>Find your perfect starting point in seconds with our adaptive test. No time wasted on things you already know.</p>
            </div>
          </div>

          <div className="step-item fade-up-2">
            <div className="step-number step-orange">2</div>
            <div className="step-content">
              <h3>Complete quick German lessons</h3>
              <p>Play fun, gamified lessons daily. Just 5-10 minutes a day is all you need to build a lasting habit.</p>
            </div>
          </div>

          <div className="step-item fade-up-3">
            <div className="step-number step-blue">3</div>
            <div className="step-content">
              <h3>Speak with confidence</h3>
              <p>Master the grammar and vocabulary up to C2 level and speak naturally in real-life scenarios.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
