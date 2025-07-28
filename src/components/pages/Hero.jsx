import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#EEEEEE] to-[#76ABAE]/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="text-[#76ABAE]" size={24} />
              <span className="text-[#76ABAE] font-semibold">AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-5xl font-bold text-[#222831] mb-6 leading-tight">
              Transform Your Business with 
              <span className="text-[#76ABAE]"> Generative AI</span>
            </h1>
            
            <p className="text-xl text-[#31363F] mb-8 leading-relaxed">
              We are a team of innovative developers and AI specialists dedicated to creating 
              cutting-edge generative AI solutions that revolutionize how businesses operate 
              and engage with their customers.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg" action="#">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-[#76ABAE] to-[#31363F] rounded-2xl p-8 text-[#EEEEEE]">
              <h3 className="text-2xl font-bold mb-4">Our AI Experts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#EEEEEE]/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-[#222831]">RS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Pawan Sharma</p>
                    <p className="text-[#EEEEEE]/80">Lead AI Developer</p>
                  </div>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="font-bold"></span>
                  </div>
                  <div>
                    <p className="font-semibold"></p>
                    <p className="text-blue-200"></p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="font-bold"></span>
                  </div>
                  <div>
                    <p className="font-semibold"></p>
                    <p className="text-blue-200"></p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;