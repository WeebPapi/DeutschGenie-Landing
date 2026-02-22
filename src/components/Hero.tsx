import "./Hero.css"
import Marquee from "./Marquee"
import { Target, Zap, Brain } from "lucide-react"

export default function Hero() {
  return (
    <section className="hero grid-texture" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        {/* ── Text Column ── */}
        <div className="hero__content">
          <span className="badge badge-orange fade-up fade-up-1">
            🎮 Gamified German Learning
          </span>

          <h1 id="hero-heading" className="hero__title fade-up fade-up-2">
            Learn German
            <br />
            <span className="hero__title-highlight">the Fun Way.</span>
          </h1>

          <p className="hero__tagline fade-up fade-up-3">
            Visual lessons. Real games. Zero boredom.
          </p>

          {/* Feature chips — replace the old wall of text */}
          <div className="hero__chips fade-up fade-up-3">
            <div className="hero__chip">
              <span className="hero__chip-icon">
                <Target size={32} strokeWidth={2.5} color="var(--orange)" />
              </span>
              <div>
                <strong>A1 → C2</strong>
                <span>Every level covered</span>
              </div>
            </div>
            <div className="hero__chip">
              <span className="hero__chip-icon">
                <Zap size={32} strokeWidth={2.5} color="var(--orange)" />
              </span>
              <div>
                <strong>Quick Lessons</strong>
                <span>5-min exercises</span>
              </div>
            </div>
            <div className="hero__chip">
              <span className="hero__chip-icon">
                <Brain size={32} strokeWidth={2.5} color="var(--orange)" />
              </span>
              <div>
                <strong>Visual Memory</strong>
                <span>Colors that stick</span>
              </div>
            </div>
          </div>

          <p className="hero__supporting fade-up fade-up-3">
            Whether you're headed to Berlin, starting Uni abroad, or want to
            shine at work — DeutschGenie gets you speaking German through
            high-energy games built for your generation.
          </p>

          {/* Store CTAs — standard flat badges */}
          <div className="hero__ctas fade-up fade-up-4">
            <a
              href="#download"
              className="store-badge"
              aria-label="Download on the App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                width="156"
                height="52"
                loading="eager"
              />
            </a>
            <a
              href="#download"
              className="store-badge"
              aria-label="Get it on Google Play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                width="170"
                height="52"
                loading="eager"
              />
            </a>
          </div>

          {/* Trust row */}
          <div
            className="hero__trust fade-up fade-up-4"
            aria-label="Social proof"
          >
            <div className="hero__stars" aria-label="4.8 out of 5 stars">
              <span aria-hidden="true" className="hero__stars-icons">
                ★★★★★
              </span>
              <span className="hero__rating-text">4.8</span>
            </div>
            <span className="hero__trust-sep" aria-hidden="true">
              ·
            </span>
            <p className="hero__user-count">
              <strong>2,400+</strong> learners already on board
            </p>
          </div>
        </div>

        {/* ── Phone Column ── */}
        <div className="hero__phones" aria-label="DeutschGenie app screenshots">
          {/* Secondary phone — offset behind */}
          <figure className="phone-mockup phone-mockup--secondary">
            <img
              src="/screens/placement-test.png"
              alt="DeutschGenie German placement test — find your level from A1 to C2"
              loading="lazy"
              draggable="false"
            />
            <figcaption className="sr-only">
              DeutschGenie placement test screen
            </figcaption>
          </figure>

          {/* Primary phone — front & center */}
          <figure className="phone-mockup phone-mockup--main">
            <img
              src="/screens/vocabulary-game.png"
              alt="DeutschGenie vocabulary game — learn German with interactive visual exercises"
              loading="eager"
              draggable="false"
            />
            <figcaption className="sr-only">
              DeutschGenie vocabulary game screen
            </figcaption>
          </figure>

          {/* Floating badge — TOP RIGHT */}
          <div
            className="hero__float-badge hero__float-badge--top-right"
            aria-hidden="true"
          >
            <span className="hero__float-icon">🚀</span>
            <div>
              <div className="hero__float-label">Fast progress</div>
              <div className="hero__float-value">Learn German quickly</div>
            </div>
          </div>

          {/* Floating badge — BOTTOM LEFT */}
          <div
            className="hero__float-badge hero__float-badge--bottom-left"
            aria-hidden="true"
          >
            <span className="hero__float-icon">⭐</span>
            <div>
              <div className="hero__float-label">Visual learning</div>
              <div className="hero__float-value">Colors = Memory</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <span className="hero__scroll-label">Scroll to learn more</span>
        <div className="hero__scroll-dot" />
      </div>

      {/* Black keyword ticker at the bottom of the hero */}
      <Marquee />
    </section>
  )
}
