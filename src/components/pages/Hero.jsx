import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Linkedin, Twitter } from 'lucide-react';

// --- Data for our components ---
const animatedWords = ["Generative AI", "Automation", "Innovation"];

const experts = [
  { 
    name: "Pawan Sharma", 
    role: "Lead AI Developer", 
    initials: "PS",
    socials: { linkedin: '#', twitter: '#' } 
  }
];

// --- Sub-Components for a cleaner structure ---

const AnimatedWords = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 75 : 150);
    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words]);

  return (
    <span className="text-[#76ABAE] block sm:inline">
      {`${words[index].substring(0, subIndex)}`}
      <span className="animate-ping">|</span>
    </span>
  );
};


// --- Main Hero Component ---
const Hero = () => {
  return (
    <section className="py-20 lg:py-6 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Main Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <Sparkles className="text-[#76ABAE]" size={20} />
              <span className="text-[#76ABAE] font-semibold">AI-POWERED SOLUTIONS</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#222831] mb-6 leading-tight">
              Transform Your Business with 
            </h1>
            <h1 className="text-4x1 sm:text-5xl lg:text-6xl font-extrabold text-[#222831] mb-6 leading-tight">
            <AnimatedWords words={animatedWords} />
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              We create cutting-edge AI solutions that revolutionize how businesses operate, innovate, and connect with their customers.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <button className="bg-[#76ABAE] text-white font-semibold py-3 px-6 rounded-lg cursor-pointer hover:bg-[#31363F] transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started
                <ArrowRight className="inline ml-2" size={20} />
              </button>
              <button className="bg-transparent border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Side: Visual Element with "Our Experts" Card */}
          <div className="relative h-96 lg:h-auto flex items-center justify-center">
            {/* Background Gradient Blob */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#76ABAE] to-[#31363F] rounded-full blur-3xl opacity-30"></div>
            
            {/* Abstract background image */}
            

            {/* "Our Experts" Floating Card */}
            <div className="relative bg-black/40 backdrop-blur-lg rounded-2xl p-8 text-white border border-white/20 shadow-xl max-w-sm w-full cursor-pointer">
              <h3 className="text-xl font-bold mb-4">Our AI Experts</h3>
              <div className="space-y-4">
                {experts.map(expert => (
                  <div key={expert.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-white">{expert.initials}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{expert.name}</p>
                        <p className="text-white/80 text-sm">{expert.role}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                        <a href={expert.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white"><Linkedin size={18} /></a>
                        <a href={expert.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white"><Twitter size={18} /></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;