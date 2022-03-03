import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Home />
      </main>
    </BrowserRouter>
  );
}

export default App;
