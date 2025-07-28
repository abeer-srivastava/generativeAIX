import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-[#222831] text-[#EEEEEE] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#76ABAE] to-[#31363F] rounded-lg flex items-center justify-center">
                <span className="text-[#EEEEEE] font-bold">GA</span>
              </div>
              <h3 className="text-xl font-bold">GenerativeAix</h3>
            </div>
            <p className="text-[#EEEEEE]/70 mb-4">
              Leading AI solutions provider, transforming businesses with cutting-edge artificial intelligence technologies.
            </p>
            <div className="flex space-x-3">
              <Facebook size={20} className="hover:text-[#76ABAE] cursor-pointer" />
              <Twitter size={20} className="hover:text-[#76ABAE] cursor-pointer" />
              <Instagram size={20} className="hover:text-[#76ABAE] cursor-pointer" />
              <Linkedin size={20} className="hover:text-[#76ABAE] cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-[#EEEEEE]/70 hover:text-[#EEEEEE] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-[#EEEEEE]/70">
              <li>Auto Blog Generator</li>
              <li>Resume Builder</li>
              <li>Language Translator</li>
              <li>Image Generator</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-[#EEEEEE]/70">+918953839476</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-[#EEEEEE]/70">generativeAix@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-[#EEEEEE]/70">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#31363F] mt-8 pt-8 text-center">
          <p className="text-[#EEEEEE]/70">
            © 2024 GenerativeAix. All rights reserved. | Designed & Developed by GenerativeAix Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;