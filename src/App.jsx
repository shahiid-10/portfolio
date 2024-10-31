import './App.css'
// import './locomotive-scroll.css'
import About from './components/About'
import Connect from './components/Connect'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

function App() {

  const scrollRef = useRef();

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   })

  //   return () => {
  //     scroll.destroy();
  //   }
  // }, [])

  return (
    <main className=' bg min-h-screen'  ref={scrollRef}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Connect  />
      <Footer />
    </main>
  )
}

export default App
