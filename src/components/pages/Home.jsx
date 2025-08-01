import React, { useState } from 'react';
import { Award, Smile, Clock, BarChart, Bot, FileText, Languages, ImageIcon, ChevronDown, Code, FileSliders, PenTool, FileSearch} from 'lucide-react';

// Assuming Hero is a separate component as it can be complex
import Hero from './Hero'; 

// --- Data for our sections ---
const statsData = [
  { icon: <Award size={32} />, value: "50+", label: "AI Solutions Delivered" },
  { icon: <Smile size={32} />, value: "100+", label: "Happy Clients" },
  { icon: <Clock size={32} />, value: "24/7", label: "Support Available" },
  { icon: <BarChart size={32} />, value: "3+", label: "Years Experience" }
];

const servicesData = [
    { icon: <Bot size={32}/>, title: "Auto Blog Generator", desc: "Generate high-quality blog content using AI-powered writing assistance." },
    { icon: <FileText size={32}/>, title: "Resume Builder", desc: "Create effective professional CVs instantly with AI optimization." },
    { icon: <Code size={32}/>, title: "Frontend Development", desc: "Create modern responsive web applications using artificial intelligence and code generation." },
    { icon: <FileSliders size={32}/>, title: "Document Converter", desc: "Convert documents across formats like PDF and DOCX with intelligent AI." },
    { icon: <ImageIcon size={32}/>, title: "Image Generator", desc: "Create AI-generated images from text prompts with diffusion models." },
    { icon: <Languages size={32}/>, title: "Language Translator", desc: "Translate text across multiple languages with real-time AI language processing." },
    { icon: <PenTool size={32}/>, title: "Text Generation", desc: "Generate useful and contextual text for various use cases using advanced AI models." },
    { icon: <FileSearch size={32}/>, title: "Job Scrapping", desc: "Automatically scrape job opportunities from various platforms to stay ahead." },
];

const faqData = [
    { q: "What is GenerativeAiX used for?", a: "GenerativeAiX is a platform offering AI-powered solutions for content creation, automation, translation, and much more to accelerate and enhance productivity." },
    { q: "Can I generate images from text prompts?", a: "Yes, our platform includes advanced text-to-image generation capabilities using state-of-the-art AI models." },
    { q: "Is there a learning tutorial available?", a: "Absolutely! We provide comprehensive tutorials and hands-on learning experiences for all skill levels." },
    { q: "What pricing plans do you offer?", a: "We offer flexible pricing plans starting from a basic free tier to premium enterprise solutions." }
];


// --- Section Components (defined inside Home.jsx for simplicity) ---

const StatsSection = () => (
  <section className="py-20 bg-gradient-to-r from-[#76ABAE] to-[#31363F] text-white">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {statsData.map(stat => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <div className="bg-white/20 p-4 rounded-full mb-4">{stat.icon}</div>
            <h3 className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</h3>
            <p className="text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/images/team/team.png" alt="Team collaborating" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
        </div>
        <div>
          <span className="text-[#76ABAE] font-semibold">WHO WE ARE</span>
          <h2 className="text-3xl md:text-4xl font-bold my-4 text-[#222831]">Pioneering the Future of AI Solutions</h2>
          <p className="text-gray-600 mb-4">We are a leading technology company specializing in artificial intelligence and the power of generative AI. Our solutions are designed to transform your business operations, from automated chatbots to intelligent data scraping.</p>
          <p className="text-gray-600 mb-6">Our mission is to make AI accessible and scalable for everyone, ensuring sustainability and growth at an affordable price point.</p>
          <button className="bg-[#76ABAE] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#31363F] transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">Learn More</button>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <span className="text-[#76ABAE] font-semibold">OUR SERVICES</span>
      <h2 className="text-3xl md:text-4xl font-bold my-4 text-[#222831]">AI-Powered Solutions for Your Business</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Explore a suite of AI-driven tools designed to enhance productivity and supercharge your operations.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map(service => (
          <div key={service.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left">
            <div className="bg-[#76ABAE]/10 text-[#76ABAE] w-16 h-16 rounded-lg flex items-center justify-center mb-6">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-500">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#76ABAE] font-semibold">QUESTIONS?</span>
            <h2 className="text-3xl md:text-4xl font-bold my-4 text-[#222831]">Frequently Asked Questions</h2>
            <div className="space-y-4 mt-8">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex justify-between items-center text-left font-semibold text-lg text-gray-800 hover:text-[#76ABAE] transition">
                    <span>{faq.q}</span>
                    <ChevronDown className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="/images/team/FAQ.png" alt="Question mark illustration" className="rounded-lg w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

const CtaSection = () => (
    <section className="py-20 bg-[#76ABAE]">
        <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">Join thousands of businesses already using our AI-powered solutions to automate processes, generate content, and accelerate growth.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#76ABAE] px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105">Get Started Free</button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#76ABAE] transition duration-300 transform hover:scale-105">Schedule a Demo</button>
            </div>
        </div>
    </section>
);


// --- The Main Home Component ---

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      {/* You can add the TutorialSection here if you create it */}
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default Home;