import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  const triggerVisitAlert = async () => {
    await fetch("https://api.voicemonkey.io/trigger?access_token=a463b3b384f346a4791076121507f5f5&secret_token=bc6ca444ac2dd100f196ab375e15ebb9&monkey=visitaportifolio&announcement=Hello%20monkey")
  }

  useEffect(() => {
    triggerVisitAlert();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
