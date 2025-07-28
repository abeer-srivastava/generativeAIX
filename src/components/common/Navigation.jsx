import React from 'react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'single', label: 'Single Page' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setCurrentPage(item.id)}
          className={`font-medium transition-colors ${
            currentPage === item.id
              ? 'text-blue-500 border-b-2 border-blue-300'
              : 'text-gray-700 hover:text-blue-600'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;