import Hero from './components/Hero.jsx'
import PrivacyNote from './components/PrivacyNote.jsx'
import InfoStrip from './components/InfoStrip.jsx'
import Flights from './components/Flights.jsx'
import DaySlideshow from './components/DaySlideshow.jsx'
import Checklist from './components/Checklist.jsx'
import OtherNotes from './components/OtherNotes.jsx'
import Faq from './components/Faq.jsx'
import LiveNotes from './components/LiveNotes.jsx'
import Habsburg from './components/Habsburg.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Hero />
      <PrivacyNote />
      <InfoStrip />
      <main>
        <Flights />
        <DaySlideshow />
        <Checklist />
        <OtherNotes />
        <Faq />
        <LiveNotes />
        <Habsburg />
      </main>
      <Footer />
    </>
  )
}
