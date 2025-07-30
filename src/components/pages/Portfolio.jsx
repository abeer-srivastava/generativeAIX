import React, { useState } from 'react';
// Import icons for a richer UI
import { ArrowRight, Bot, FileText, Languages, ImageIcon, Briefcase, GraduationCap, PenTool, Code } from 'lucide-react';

// --- DATA: Now with categories for smart filtering ---
const portfolioItems = [
    {
        title: 'Auto Blog',
        subtitle: 'AI-powered content writing',
        image: '/images/portfolio/Autoblog.jpg',
        category: 'AI',
        icon: <PenTool size={48} />
    },
    {
        title: 'Resume Builder',
        subtitle: 'Professional CVs in seconds',
        image: '/images/portfolio/Resume_builder.jpg',
        category: 'Tools',
        icon: <FileText size={48} />
    },
    {
        title: 'Language Translator',
        subtitle: 'Real-time translation',
        image: '/images/portfolio/Language_translator.jpg',
        category: 'Tools',
        icon: <Languages size={48} />
    },
    {
        title: 'Document Converter',
        subtitle: 'PDF, DOCX, HTML & more',
        image: '/images/portfolio/document_converter.jpg',
        category: 'Tools',
        icon: <Briefcase size={48} />
    },
    {
        title: 'Job Scrapping',
        subtitle: 'Find jobs automatically',
        image: '/images/portfolio/Job_scrapping.jpg',
        category: 'AI',
        icon: <Bot size={48} />
    },
    {
        title: 'Learning Tutorials',
        subtitle: 'Hands-on AI learning',
        image: '/images/portfolio/Learning_Tutorial.jpg',
        category: 'Other',
        icon: <GraduationCap size={48} />
    },
    {
        title: 'Text Generation',
        subtitle: 'Contextual AI writing',
        image: '/images/portfolio/Text_generator.jpg',
        category: 'AI',
        icon: <PenTool size={48} />
    },
    {
        title: 'Create GPT UI',
        subtitle: 'Custom GPT interfaces',
        image: '/images/portfolio/GPT_UI.jpg',
        category: 'AI',
        icon: <Code size={48} />
    },
];

const FILTERS = ['All', 'AI', 'Tools', 'Other'];

// --- Sub-Components for a cleaner structure ---

const PortfolioCard = ({ item }) => (
    <div className="group relative rounded-xl overflow-hidden shadow-lg">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
            <p className="text-white/80">{item.subtitle}</p>
            <button className="flex items-center text-white font-semibold mt-4 opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                View Project <ArrowRight size={20} className="ml-2" />
            </button>
        </div>
    </div>
);


// --- Main Portfolio Page Component ---

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredItems = activeFilter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    return (
        <div>
            {/* Hero Section */}
            <section className="py-20 text-center bg-gray-50">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#76ABAE] to-[#222831]">
                        Our Portfolio
                    </h1>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                        A showcase of our innovative AI-powered solutions. Explore the tools we've built to drive efficiency and creativity.
                    </p>
                </div>
            </section>

            {/* Portfolio Grid Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    {/* Filters */}
                    <div className="flex justify-center gap-3 mb-12 flex-wrap">
                        {FILTERS.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                                    activeFilter === filter
                                        ? 'bg-[#76ABAE] text-white shadow-md'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredItems.map((item) => (
                            <PortfolioCard key={item.title} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#76ABAE] to-[#31363F]">
                <div className="container mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Project in Mind?</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Let's collaborate to build the next generation of AI tools for your business.
                    </p>
                    <button className="bg-white text-[#222831] px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105">
                        Contact Us
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;