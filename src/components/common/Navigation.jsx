import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'single', label: 'Single Page' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation - Hidden on smaller screens, visible on large screens */}
      <nav className="hidden lg:flex space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`font-medium transition-colors ${
              currentPage === item.id
                ? 'text-[#76ABAE] border-b-2 border-[#76ABAE]'
                : 'text-[#31363F] hover:text-[#76ABAE]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile/Tablet Menu Button - Only visible when desktop nav is hidden */}
      <button
        className="lg:hidden p-2 text-[#31363F] hover:text-[#76ABAE] transition-colors z-50 relative"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0  bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[80%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="h-full flex flex-col">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-[#EEEEEE]">
            <h2 className="text-xl font-bold text-[#222831]">Menu</h2>
            <button
              className="p-2 text-[#31363F] hover:text-[#76ABAE] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Navigation Items */}
          <div className="flex-1 flex flex-col py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 text-[#31363F] hover:bg-gray-100 transition-colors ${
                  currentPage === item.id ? 'bg-[#76ABAE] text-white' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t border-gray-200 text-center bg-[#EEEEEE]">
            <p className="text-sm text-[#31363F] font-medium">GenerativeAix</p>
            <p className="text-xs text-[#31363F]/70 mt-1">AI-Powered Solutions</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;