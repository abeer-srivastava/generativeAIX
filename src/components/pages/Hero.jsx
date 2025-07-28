import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="text-blue-600" size={24} />
              <span className="text-blue-600 font-semibold">AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with 
              <span className="text-blue-600"> Generative AI</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are a team of innovative developers and AI specialists dedicated to creating 
              cutting-edge generative AI solutions that revolutionize how businesses operate 
              and engage with their customers.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our AI Experts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="font-bold">RS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ranjeet Singh</p>
                    <p className="text-blue-200">Lead AI Developer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="font-bold">RV</span>
                  </div>
                  <div>
                    <p className="font-semibold">Rohan Verma</p>
                    <p className="text-blue-200">ML Engineer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="font-bold">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Anjali Singh</p>
                    <p className="text-blue-200">AI Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;