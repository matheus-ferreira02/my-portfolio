import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </BrowserRouter>
  );
}

export default App;
