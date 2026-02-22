import "./Marquee.css"

const KEYWORDS = [
  "🎮 Learn German with Games",
  "⚡ Quick German Lessons",
  "🎯 Gamified German",
  "🧠 Visual Learning",
  "🇩🇪 A1 to B2",
  "🔥 Fast German Lessons",
  "✈️ Study Abroad German",
  "⭐ Easy German",
  "🏆 German Placement Test",
  "🚀 Learn German Fast",
  "💡 Fun German Learning",
  "📚 A1 to C2 Course",
]

export default function Marquee() {
  // Duplicate list so the loop is seamless
  const items = [...KEYWORDS, ...KEYWORDS]

  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {items.map((kw, i) => (
          <span key={i} className="marquee-item">
            {kw}
            <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
