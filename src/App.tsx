import { useState } from 'react'
import { About } from './components/About/About'
import { BookingForm } from './components/BookingForm/BookingForm'
import { Contacts } from './components/Contacts/Contacts'
import { Faq } from './components/Faq/Faq'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Services } from './components/Services/Services'
import { Workflow } from './components/Workflow/Workflow'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((o) => !o)}
        onMenuClose={() => setMenuOpen(false)}
      />
      <main>
        <Hero />
        <Services />
        <About />
        <Workflow />
        <Portfolio />
        <Faq />
        <BookingForm />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default App
