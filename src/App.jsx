import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LogoMarquee from './components/LogoMarquee'
import StatsSection from './components/StatsSection'
import OfferSection from './components/OfferSection'
import ProcessTimeline from './components/ProcessTimeline'
import FAQSection from './components/FAQSection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Header />
      <main>
        <HeroSection />
        <LogoMarquee />
        <StatsSection />
        <OfferSection />
        <ProcessTimeline />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
