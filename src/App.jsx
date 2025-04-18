import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Projects } from './components/pages/Projects';
import { Contact } from './components/pages/Contact';
import {Experience} from './components/pages/Experience';
import './index.css';

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="overflow-x-hidden text-neutral-300 antialiased">
			{!isLoaded && (
				<LoadingScreen onComplete={() => setIsLoaded(true)} />
			)}{' '}
			<div
				className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} app-background`}
			>
				<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<Home />
				<About />
				<Experience/>
				<Projects />
				<Contact />
			</div>
		</div>
	);
}

export default App;
