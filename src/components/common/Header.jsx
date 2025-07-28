import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import Navigation from "./Navigation";

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-500 text-white py-2">
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
            <a href="https://www.facebook.com/profile.php?id=61578882025775">
              {" "}
              <Facebook
                size={16}
                className="hover:text-blue-300 cursor-pointer"
              />
            </a>
            <a href="https://x.com/Generative_Aix">
              <X
                size={16}
                className="hover:text-blue-300 cursor-pointer"
              />
            </a>
            <a href="https://www.instagram.com/generativeaix?igsh=MnhxM2ZjdXl4c3N0">
              {" "}
              <Instagram
                size={16}
                className="hover:text-blue-300 cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com/in/generative-aix-363ba1376/">
              <Linkedin
                size={16}
                className="hover:text-blue-300 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="/images/icons/logo.png"
              alt="Generative Aix Logo"
              className="w-75 h-35 object-contain rounded-lg bg-white"
            />
            <h1 className="text-2xl font-bold text-blue-500"></h1>
          </div>

          <Navigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
