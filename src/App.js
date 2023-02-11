import { useContext } from 'react'
import { ThemeContext } from './theme'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import ScrollToTop from './ScrollToTop'
import Contact from './Contact'
import Footer from './Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App

