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
                  <a target="#" href="generativeAix@gmail.com">generativeAix@gmail.com</a>
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 mobile-social-icons">
              <a target="#" href="https://www.facebook.com/profile.php?id=61578882025775" className="hover:text-[#222831] transition-colors">
                <Facebook size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a target="#" href="https://x.com/Generative_Aix" className="hover:text-[#222831] transition-colors">
                <Twitter size={14} className="sm:w-4 sm:h-4" />
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
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            <img
              src="/images/icons/finalLogo-removebg-preview.png"
              alt="Generative Aix Logo"
              className="mobile-header-logo w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain rounded-lg bg-[#EEEEEE]"
            />
            <div className="hidden sm:block">
              <h1 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#76ABAE]">GenerativeAix</h1>
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
