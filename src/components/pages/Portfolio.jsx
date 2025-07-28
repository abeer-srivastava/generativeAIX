import React, { useState } from 'react';
import { SquareMenu } from 'lucide-react'; // Add this import

const MODULES = [
	{
		title: 'Auto Blog',
		subtitle: 'AI-powered content writing',
		image: '/images/portfolio/blog.jpg',
	},
	{
		title: 'Resume Builder',
		subtitle: 'Professional CVs in seconds',
		image: '/images/portfolio/resume.jpg',
	},
	{
		title: 'Language Translator',
		subtitle: 'Real-time translation',
		image: '/images/portfolio/translator.jpg',
	},
	{
		title: 'Document Converter',
		subtitle: 'PDF, DOCX, HTML & more',
		image: '/images/portfolio/converter.jpg',
	},
	{
		title: 'Job Scrapping',
		subtitle: 'Find jobs automatically',
		image: '/images/portfolio/jobs.jpg',
	},
	{
		title: 'Learning Tutorials',
		subtitle: 'Hands-on AI learning',
		image: '/images/portfolio/tutorials.jpg',
	},
	{
		title: 'Text Generation',
		subtitle: 'Contextual AI writing',
		image: '/images/portfolio/textgen.jpg',
	},
	{
		title: 'Create GPT UI',
		subtitle: 'Custom GPT interfaces',
		image: '/images/portfolio/gptui.jpg',
	},
];

const FILTERS = ['All', 'Stepper', 'Tools', 'AI', 'Other'];

const Portfolio = () => {
	const [active, setActive] = useState('All');

	// For demo, all modules are shown for "All"
	const filtered =
		active === 'All'
			? MODULES
			: MODULES.filter((m) =>
					m.subtitle.toLowerCase().includes(active.toLowerCase())
			  );

	return (
		<div>
			{/* Hero */}
			<section className="bg-gradient-to-r from-blue-600 to-blue-400 py-14">
				<div className="container mx-auto px-4 text-center">
					<div className="text-white text-sm mb-2 opacity-80">
						Home &gt;{' '}
						<span className="font-semibold">Portfolio</span>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-2">
						PORTFOLIO
					</h1>
				</div>
			</section>

			{/* Modules */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-2">
							OUR MODULES
						</h2>
						<p className="text-gray-500 max-w-xl mx-auto">
							This section showcases the main modules of the GenerativeAix
							platform. Hundreds of powerful productivity and conversion tools.
						</p>
					</div>
					{/* Filters */}
					<div className="flex justify-center gap-3 mb-8 flex-wrap">
						{FILTERS.map((f) => (
							<button
								key={f}
								className={`px-5 py-2 rounded-full border transition ${
									active === f
										? 'bg-blue-600 text-white'
										: 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'
								}`}
								onClick={() => setActive(f)}
							>
								{f}
							</button>
						))}
					</div>
					{/* Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
						{filtered.map((mod, i) => (
							<div
								key={i}
								className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col items-center justify-between py-6 px-4 min-h-[220px]"
							>
								<div className="mb-4 flex">
									<SquareMenu  size={48} color="#1e293b" />
								</div>
								<div className="w-full text-center mt-auto">
									<h3 className="font-bold text-lg text-gray-700 mb-1">
										{mod.title}
									</h3>
									<p className="text-blue-700 font-medium text-sm">
										{mod.subtitle}
									</p>
								</div>
							</div>
						))}
					</div>
					{/* Load More */}
					<div className="flex justify-center">
						<button className="bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
							LOAD PAGE
						</button>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-gradient-to-r from-blue-700 to-blue-500 py-12">
				<div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
					<div className="text-white text-2xl font-bold mb-4 md:mb-0">
						START AUTOMATING WITH GENERATIVEAIX
					</div>
					<button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
						CONTACT US
					</button>
				</div>
			</section>

			{/* Footer */}
			
		</div>
	);
};

export default Portfolio;