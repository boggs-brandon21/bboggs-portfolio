import { RevealOnScroll } from '../RevealOnScroll';
import { technologies } from '../../constants';

export const About = () => {
	const frontEndSkills = [
		'React',
		'Vue',
		'TypeScript',
		'TailwindCSS',
		'Bootstrap',
	];
	const backEndSkills = [
		'Node.js',
		'Python',
		'MongoDB',
		'GraphQL',
		'PostgreSQL',
	];

	return (
		<section
			id="about"
			className="min-h-screen flex items-center justify-center py-20"
		>
			<RevealOnScroll>
				<div className="max-w-3xl mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
						About Me
					</h2>

					<div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
						<p className="text-gray-300 mb-6">
							I am a computer science student at SNHU University
							and a veteran of the US Army with a passion for
							fullstack development, data science, artificial
							intelligence, and machine learning. I am looking to
							join a company that values creative thinking,
							collaboration, innovation, and continous learning. I
							am confident that my hard work and dilligence will
							allow me to be successful in any role in the field.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
								<h3 className="text-xl font-bold mb-4">
									{' '}
									Frontend{' '}
								</h3>
								<div className="flex flex-wrap gap-2">
									{frontEndSkills.map((tech, key) => (
										<span
											key={key}
											className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
							<div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
								<h3 className="text-xl font-bold mb-4">
									{' '}
									Backend{' '}
								</h3>
								<div className="flex flex-wrap gap-4">
									{backEndSkills.map((tech, key) => (
										<span
											key={key}
											className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
							<div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
								<h3 className="text-xl font-bold mb-4">
									Education
								</h3>
								<ul className="list-disc list-inside text-gray-300 space-y-2">
									<li>
										<strong>
											B.S. in Computer Science
										</strong>{' '}
										- Southern New Hampshire University{' '}
										{2023 - 2025}
									</li>
									<li>
										Relevant Coursework: Data Structures,
										Web Development, Machine Learning,
										Aritifical Intelligence
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
