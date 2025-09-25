import { useEffect } from 'react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
	const toggleResume = () => {
		const resumeUrl = `${import.meta.env.BASE_URL}Resume.pdf`;
		window.open(resumeUrl, '_blank');
	};

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
	}, [menuOpen]);

	return (
		<nav className="fixed top-0 w-full z-40 bg-[rgba(23, 133, 23, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
			<div className="max-w-5xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<a
						href="#home"
						className="font-mono text-xl font-bold text-blue-500"
					>
						{' '}
						Brandon&nbsp;<span className="">Boggs</span>{' '}
					</a>
					<div
						className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
						onClick={() => setMenuOpen((prev) => !prev)}
					>
						&#9776;
					</div>
					<div className="hidden md:flex items-center space-x-8 text-xl font-bold">
						<a
							href="#home"
							className="text-rose-500 hover:text-white transition-colors"
						>
							{' '}
							Home{' '}
						</a>
						<a
							href="#about"
							className="text-rose-500 hover:text-white transition-colors"
						>
							{' '}
							About{' '}
						</a>
						<a
							href="#projects"
							className="text-rose-500 hover:text-white transition-colors"
						>
							{' '}
							Projects{' '}
						</a>
						<a
							href="#contact"
							className="text-rose-500 hover:text-white transition-colors"
						>
							{' '}
							Contact{' '}
						</a>
						<a
							onClick={toggleResume}
							className="text-rose-500 hover:text-white transition-colors"
						>
							{' '}
							Resume{' '}
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
