import React, { useState } from 'react';

const MODULES = [
  {
    title: "Auto Blog",
    subtitle: "AI-powered content writing",
    image: "/images/portfolio/blog.jpg"
  },
  {
    title: "Resume Builder",
    subtitle: "Professional CVs in seconds",
    image: "/images/portfolio/resume.jpg"
  },
  {
    title: "Language Translator",
    subtitle: "Real-time translation",
    image: "/images/portfolio/translator.jpg"
  },
  {
    title: "Document Converter",
    subtitle: "PDF, DOCX, HTML & more",
    image: "/images/portfolio/converter.jpg"
  },
  {
    title: "Job Scrapping",
    subtitle: "Find jobs automatically",
    image: "/images/portfolio/jobs.jpg"
  },
  {
    title: "Learning Tutorials",
    subtitle: "Hands-on AI learning",
    image: "/images/portfolio/tutorials.jpg"
  },
  {
    title: "Text Generation",
    subtitle: "Contextual AI writing",
    image: "/images/portfolio/textgen.jpg"
  },
  {
    title: "Create GPT UI",
    subtitle: "Custom GPT interfaces",
    image: "/images/portfolio/gptui.jpg"
  }
];

const FILTERS = ["All", "Stepper", "Tools", "AI", "Other"];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  // For demo, all modules are shown for "All"
  const filtered = active === "All" ? MODULES : MODULES.filter(m => m.subtitle.toLowerCase().includes(active.toLowerCase()));

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white text-sm mb-2 opacity-80">Home &gt; <span className="font-semibold">Portfolio</span></div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-2">PORTFOLIO</h1>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">OUR MODULES</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              This section showcases the main modules of the GenerativeAix platform. Hundreds of powerful productivity and conversion tools.
            </p>
          </div>
          {/* Filters */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`px-5 py-2 rounded-full border transition ${active === f ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {filtered.map((mod, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col items-center">
                <img src={mod.image} alt={mod.title} className="w-full h-36 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-1">{mod.title}</h3>
                  <p className="text-gray-500 text-sm">{mod.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Load More */}
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">LOAD PAGE</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white text-2xl font-bold mb-4 md:mb-0">START AUTOMATING WITH GENERATIVEAIX</div>
          <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">CONTACT US</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2a3a] text-gray-300 py-10 text-sm">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-2 text-white">ABOUT US</h4>
            <p className="mb-2">GenerativeAix provides AI-powered tools for blogging, resumes, translation, and more. Get in touch to explore custom solutions for you.</p>
            <div className="mb-1">📞 +1234567890</div>
            <div className="mb-1">✉️ generativeaix@domain.com</div>
            <div>🌐 www.generativeaix.com</div>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-white">USEFUL LINK</h4>
            <ul className="space-y-1">
              <li>Our Policy</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Services</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-white">USEFUL LINK</h4>
            <ul className="space-y-1">
              <li>Feature Review</li>
              <li>Customer Review</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
          © GenerativeAix 2025. All Rights Reserved. &nbsp; Designed & Developed by GenerativeAix Team
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;