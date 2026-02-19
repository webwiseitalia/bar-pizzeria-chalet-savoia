import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChiSiamo from './components/ChiSiamo'
import Menu from './components/Menu'
import Posizione from './components/Posizione'
import Stagioni from './components/Stagioni'
import Recensioni from './components/Recensioni'
import Gallery from './components/Gallery'
import Contatti from './components/Contatti'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ChiSiamo />
      <Menu />
      <Posizione />
      <Stagioni />
      <Recensioni />
      <Gallery />
      <Contatti />
      <Footer />

      {/* Mobile Fixed Call Button */}
      <a
        href="tel:+393397166992"
        className="fixed bottom-4 right-4 z-50 md:hidden bg-burgundy-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-burgundy-600 transition-colors"
        aria-label="Chiama Chalet Savoia"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </div>
  )
}

export default App
