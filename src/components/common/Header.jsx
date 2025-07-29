import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Navigation from "./Navigation";

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="bg-[#EEEEEE] shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#76ABAE] text-[#EEEEEE] py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm space-y-2 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 mobile-contact-info">
              <div className="flex items-center space-x-1">
                <Phone size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">+918953839476</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">
                  <a target="#" href="mailto:generativeaixtech@gmail.com">generativeaixtech@gmail.com</a>
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 mobile-social-icons">
              <a target="#" href="https://www.facebook.com/profile.php?id=61578882025775" className="hover:text-[#222831] transition-colors">
                <Facebook size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a target="#" href="https://x.com/Generative_Aix" className="hover:text-[#222831] transition-colors">
                <svg className="w-4 h-4 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a target="#" href="https://www.instagram.com/generativeaix?igsh=MnhxM2ZjdXl4c3N0" className="hover:text-[#222831] transition-colors">
                <Instagram size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a target="#" href="https://www.linkedin.com/in/generative-aix-363ba1376/" className="hover:text-[#222831] transition-colors">
                <Linkedin size={14} className="sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          {/* mobile-header-logo w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-contain rounded-lg bg-[#EEEEEE] */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            <img
              src="/images/icons/finalLogo-removebg-preview.png"
              alt="Generative Aix Logo"
              className="h-auto max-h-16 w-auto object-contain rounded-lg bg-[#EEEEEE]"
            />
            <div className="hidden sm:block">
              <h1 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#76ABAE]"></h1>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center">
            <Navigation
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
