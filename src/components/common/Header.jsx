import React, { useState, useEffect } from "react";
import { COMPANY_INFO } from "../../utils/constants";
import { Menu, X, Home, User, Briefcase, FileText, Mail } from "lucide-react";

const FinalHeader = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', Icon: Home },
    { id: 'about', label: 'About Us', Icon: User },
    { id: 'services', label: 'Services', Icon: Briefcase },
    { id: 'portfolio', label: 'Portfolio', Icon: FileText },
  ];
  
  const contactItem = { id: 'contact', label: 'Contact Us', Icon: Mail };

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button onClick={() => handleNavClick('home')} className="flex items-center space-x-2">
              <img src="/images/icons/finalLogo-removebg-preview.png" alt="Generative Aix Logo"
                   className="h-auto max-h-36 w-auto cursor-pointer" /> {/* Simplified logo size for consistency */}
            </button>

            {/* --- CHANGE 1: Desktop Navigation --- */}
            {/* Changed 'hidden lg:flex' to 'hidden md:flex' to show on tablets */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors duration-300 cursor-pointer ${
                    currentPage === item.id
                      ? 'bg-teal-100 text-[#76ABAE]'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick(contactItem.id)}
                className="bg-[#76ABAE] text-white font-semibold py-2 px-5 rounded-lg hover:bg-teal-600 transition-colors shadow-sm ml-4 cursor-pointer"
              >
                {contactItem.label}
              </button>
            </nav>

            {/* --- CHANGE 2: Mobile Menu Button --- */}
            {/* Changed 'lg:hidden' to 'md:hidden' to hide on tablets */}
            <button
              className="md:hidden p-2 text-gray-800 z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop and Panel (no change needed here, they correctly use md:hidden logic implicitly) */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[80%] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
            <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            </div>
            <nav className="flex-grow p-4 space-y-2">
                {navItems.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`flex items-center w-full space-x-3 px-4 py-3 rounded-lg text-left font-medium transition-all duration-300 ${
                            currentPage === item.id ? 'bg-[#76ABAE] text-white' : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        style={{ transitionDelay: `${isMenuOpen ? index * 50 : 0}ms` }}
                    >
                        <item.Icon size={20} />
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
            <div className="p-4 border-t">
                <button
                    onClick={() => handleNavClick(contactItem.id)}
                    className="w-full flex items-center justify-center space-x-3 bg-[#76ABAE] text-white font-semibold py-3 px-5 rounded-lg hover:bg-teal-600 transition-colors shadow-sm"
                >
                    <contactItem.Icon size={20} />
                    <span>{contactItem.label}</span>
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default FinalHeader;