import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tecnologies from './pages/Tecnologies';
import Contacts from './pages/Contacts';
import Settings from './pages/Settings';

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Home />}/>
				<Route exact path="/about" element={<About />}/>
				<Route exact path="/tecnologies" element={<Tecnologies />}/>
				<Route exact path="/projects" element={<Projects />}/>
				<Route exact path="/contacts" element={<Contacts />}/>
				<Route exact path="/settings" element={<Settings />}/>
			</Routes>
		</div>
	);
}
