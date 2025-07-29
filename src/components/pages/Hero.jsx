import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-20 bg-gradient-to-br from-[#EEEEEE] to-[#76ABAE]/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* AI Experts Section - Show first on mobile */}
          <div className="relative order-first lg:order-last">
            <div className="bg-gradient-to-r from-[#76ABAE] to-[#31363F] rounded-2xl p-4 sm:p-6 lg:p-8 text-[#EEEEEE]">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Our AI Experts</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EEEEEE]/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-[#222831] text-sm sm:text-base">RS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Pawan Sharma</p>
                    <p className="text-[#EEEEEE]/80 text-xs sm:text-sm">Lead AI Developer</p>
                  </div>
                </div>
                {/* Additional team members can be added here */}
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="text-center lg:text-left order-last lg:order-first">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-3 sm:mb-4 lg:mb-6">
              <Sparkles className="text-[#76ABAE]" size={18} />
              <span className="text-[#76ABAE] font-semibold text-sm sm:text-base">AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#222831] mb-3 sm:mb-4 lg:mb-6 leading-tight">
              Transform Your Business with 
              <span className="text-[#76ABAE] block sm:inline"> Generative AI</span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#31363F] mb-4 sm:mb-6 lg:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              We are a team of innovative developers and AI specialists dedicated to creating 
              cutting-edge generative AI solutions that revolutionize how businesses operate 
              and engage with their customers.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" action="#">
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;