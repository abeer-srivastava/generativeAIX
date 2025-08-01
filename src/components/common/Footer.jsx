import React from 'react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../../utils/constants';
// Make sure to import the 'X' icon for Twitter/X
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, X, ArrowRight } from 'lucide-react';

const PerfectFooter = ({ setCurrentPage }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const servicesLinks = [
    'Auto Blog Generator',
    'Resume Builder',
    'Language Translator',
    'Image Generator'
  ];

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling
    });
  };

  return (
    <footer className="bg-[#222831] text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Top Section: Newsletter and Company Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12 border-b border-gray-700 pb-12">
          {/* Company Info & Socials */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#76ABAE] to-[#31363F] rounded-lg flex items-center justify-center">
                 <span className="text-white font-bold">GA</span>
              </div>
              <h3 className="text-2xl font-bold">{COMPANY_INFO.name}</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Leading AI solutions provider, transforming businesses with cutting-edge artificial intelligence technologies.
            </p>
            {/* --- ERROR-PROOF ICONS --- */}
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white bg-gray-700/50 hover:bg-gray-700 p-2 rounded-full transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white bg-gray-700/50 hover:bg-gray-700 p-2 rounded-full transition-all duration-300"
              >
                <X size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white bg-gray-700/50 hover:bg-gray-700 p-2 rounded-full transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white bg-gray-700/50 hover:bg-gray-700 p-2 rounded-full transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Join Our Newsletter</h4>
            <p className="text-gray-400 mb-4">Get the latest trends in AI and our exclusive deals directly in your inbox.</p>
            <form className="flex items-center gap-2 mt-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-700/50 text-white placeholder-gray-500 px-4 py-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-[#76ABAE] focus:outline-none transition-all"
                required
              />
              <button type="submit" className="bg-[#76ABAE] hover:bg-teal-500 p-3 rounded-md transition-colors">
                <ArrowRight size={24} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Links */}
        <div className="grid md:grid-cols-4 gap-8">
          <div>
             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
             <ul className="space-y-3">
               {quickLinks.map((link) => (
                 <li key={link.id}>
                   <button 
                     onClick={() => {
                       scrollToTop();
                       setCurrentPage(link.id);
                     }}
                     className="text-gray-400 hover:text-white transition-colors cursor-pointer group"
                   >
                     {link.label}
                     <span className="opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">→</span>
                   </button>
                 </li>
               ))}
             </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              {servicesLinks.map((service) => <li key={service}>{service}</li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4 text-gray-400">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center space-x-3 hover:text-white">
                <Phone size={18} />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center space-x-3 hover:text-white">
                <Mail size={18} />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-black bg-opacity-20 mt-8 py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-2">
           <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
           <p>Designed & Developed by Techiguru.in</p>
        </div>
      </div>
    </footer>
  );
};

export default PerfectFooter;