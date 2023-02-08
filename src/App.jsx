import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Header from './pages/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import './App.css';
import Socials from './pages/Socials';




const App = () => {
  return (
    <>
    <Header />
    <Socials />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App