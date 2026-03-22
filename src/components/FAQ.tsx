import React from "react"
import "./FAQ.css"

const FAQ: React.FC = () => {
  return (
    <section className="faq-section section" id="faq">
      <div className="container">
        <div className="faq-header fade-up">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about our visual German learning app.</p>
        </div>

        <div className="faq-list">
          <details className="faq-item fade-up-1" name="faq">
            <summary className="faq-question">
              <h3>Does this app cover the A1 to C2 German course levels?</h3>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-answer">
              <p>Yes. DeutschGenie is designed to be a comprehensive A1 to C2 German course. Beginners start with basic vocabulary visuals at A1, while advanced students can jump straight into complex grammar games at C1 and C2.</p>
            </div>
          </details>

          <details className="faq-item fade-up-2" name="faq">
            <summary className="faq-question">
              <h3>How does the German Placement Test work?</h3>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-answer">
              <p>When you download the app, you take a quick 5-minute German placement test. It adapts to your answers in real-time, accurately determining your CEFR level from A1 to C2 so you don't waste time on easy topics.</p>
            </div>
          </details>

          <details className="faq-item fade-up-3" name="faq">
            <summary className="faq-question">
              <h3>Is it really possible to learn German fast with games?</h3>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-answer">
              <p>Absolutely! The mechanism behind our visual German learning app is spaced repetition combined with active recall. Quick German lessons and gamified mechanics keep your brain engaged, proven to build long-term memory faster than passive textbook reading.</p>
            </div>
          </details>

          <details className="faq-item fade-up-4" name="faq">
            <summary className="faq-question">
              <h3>Can I use it offline?</h3>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-answer">
              <p>Yes, all premium users can download their visual lessons for offline use. It's perfect for continuing your quick German lessons on an airplane or train commute.</p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}

export default FAQ
