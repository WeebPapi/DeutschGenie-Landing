import "./index.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import SocialProof from "./components/SocialProof"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import TargetAudience from "./components/TargetAudience"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <TargetAudience />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
