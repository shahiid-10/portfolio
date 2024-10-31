import './App.css';
import About from './components/About';
import Connect from './components/Connect';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const navbarRef = useRef(null);
  const sectionsRef = useRef([]);

  useGSAP(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
    });

    sectionsRef.current.forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
          once:  true
        },

      });
    });
  }, []);

  return (
    <main className="mainn bg min-h-screen">
      <div ref={navbarRef} className='sticky top-0 z-20'>
        <Navbar />
      </div>
      <section ref={(el) => (sectionsRef.current[0] = el)}><Home /></section>
      <section ref={(el) => (sectionsRef.current[1] = el)}><About /></section>
      <section ref={(el) => (sectionsRef.current[2] = el)}><Projects /></section>
      <section ref={(el) => (sectionsRef.current[3] = el)}><Connect /></section>
      <section ><Footer /></section>
    </main>
  );
}

export default App;
