import React from 'react';
import ServicesGrid from '../sections/ServicesGrid';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';








const Services = () => {
  const serviceFeatures = [
    "24/7 Customer Support",
    "Scalable Solutions",
    "Custom AI Models",
    "Data Security & Privacy",
    "Regular Updates & Maintenance",
    "Training & Documentation"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We analyze your business needs and identify AI opportunities"
    },
    {
      step: "02", 
      title: "Planning",
      description: "We create a detailed roadmap and technical specifications"
    },
    {
      step: "03",
      title: "Development", 
      description: "Our team builds and tests your custom AI solution"
    },
    {
      step: "04",
      title: "Deployment",
      description: "We deploy and integrate the solution into your workflow"
    },
    {
      step: "05",
      title: "Support",
      description: "Ongoing maintenance, updates, and optimization"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our AI Services</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive artificial intelligence solutions designed to transform your business 
              operations, enhance productivity, and drive innovation across all industries.
            </p>
            <Button size="lg" className="mb-8">
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid showAll={true} />

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose GenerativeAix?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We combine cutting-edge AI technology with deep industry expertise to deliver 
                solutions that not only meet your current needs but also scale with your future growth.
              </p>
              
              <div className="space-y-4">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Highlights</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Custom AI Development</h4>
                  <p className="text-gray-600 text-sm mt-1">Tailored solutions built specifically for your business needs</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Enterprise Integration</h4>
                  <p className="text-gray-600 text-sm mt-1">Seamless integration with your existing systems and workflows</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                  <p className="text-gray-600 text-sm mt-1">Continuous monitoring, updates, and optimization</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional AI solutions</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our AI solutions can drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button variant="ghost" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;