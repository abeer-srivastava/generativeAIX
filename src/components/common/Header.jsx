import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Menu } from 'lucide-react';
import Navigation from './Navigation';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <span>+918953839476</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={16} />
              <span>generativeAix@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Facebook size={16} className="hover:text-blue-300 cursor-pointer" />
            <Twitter size={16} className="hover:text-blue-300 cursor-pointer" />
            <Instagram size={16} className="hover:text-blue-300 cursor-pointer" />
            <Linkedin size={16} className="hover:text-blue-300 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">GA</span>
            </div>
            <h1 className="text-2xl font-bold text-blue-600">GenerativeAix</h1>
          </div>
          
          <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </header>
  );
};

export default Header;