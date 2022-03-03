import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </BrowserRouter>
  );
}

export default App;
