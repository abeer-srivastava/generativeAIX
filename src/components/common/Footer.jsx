import React from 'react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../../utils/constants';
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
              <h3 className="text-xl font-bold">{COMPANY_INFO.name}</h3>
            </div>
            <p className="text-[#EEEEEE]/70 mb-4">
              Leading AI solutions provider, transforming businesses with cutting-edge artificial intelligence technologies.
            </p>
            <div className="flex items-center space-x-2 sm:space-x-3 mobile-social-icons">
              <a target="#" href={SOCIAL_LINKS.facebook} className="hover:text-[#222831] transition-colors">
                <Facebook size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a target="#" href={SOCIAL_LINKS.twitter} className="hover:text-[#222831] transition-colors">
                <Twitter size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a target="#" href={SOCIAL_LINKS.instagram} className="hover:text-[#222831] transition-colors">
                <Instagram size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a target="#" href={SOCIAL_LINKS.linkedin} className="hover:text-[#222831] transition-colors">
                <Linkedin size={14} className="sm:w-4 sm:h-4" />
              </a>
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
                    className="text-[#EEEEEE]/70 hover:text-[#EEEEEE] transition-colors cursor-pointer"
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
                <span className="text-[#EEEEEE]/70">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-[#EEEEEE]/70">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-[#EEEEEE]/70">{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#31363F] mt-8 pt-8 text-center">
          <p className="text-[#EEEEEE]/70">
            © 2025 {COMPANY_INFO.name}. All rights reserved. | Designed & Developed by Techiguru.in
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;