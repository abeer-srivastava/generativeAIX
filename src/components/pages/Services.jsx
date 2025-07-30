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
      <section className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-[#76ABAE] to-[#76ABAE]/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222831] mb-4 lg:mb-6">Our AI Services</h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#31363F] mb-6 lg:mb-8 leading-relaxed">
              Comprehensive artificial intelligence solutions designed to transform your business 
              operations, enhance productivity, and drive innovation across all industries.
            </p>
            <Button size="lg" className="mb-6 lg:mb-8">
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid showAll={true} />

      {/* Why Choose Us */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#EEEEEE]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222831] mb-4 lg:mb-6">Why Choose GenerativeAix?</h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#31363F] mb-6 lg:mb-8 leading-relaxed">
                We combine cutting-edge AI technology with deep industry expertise to deliver 
                solutions that not only meet your current needs but also scale with your future growth.
              </p>
              
              <div className="space-y-3 lg:space-y-4">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 justify-center lg:justify-start">
                    <CheckCircle className="text-[#76ABAE] flex-shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-[#222831]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#222831] mb-4 lg:mb-6">Service Highlights</h3>
              <div className="space-y-4 lg:space-y-6">
                <div className="border-l-4 border-[#76ABAE] pl-3 lg:pl-4">
                  <h4 className="font-semibold text-sm sm:text-base text-[#222831]">Custom AI Development</h4>
                  <p className="text-xs sm:text-sm text-[#31363F] mt-1">Tailored solutions built specifically for your business needs</p>
                </div>
                <div className="border-l-4 border-[#31363F] pl-3 lg:pl-4">
                  <h4 className="font-semibold text-sm sm:text-base text-[#222831]">Enterprise Integration</h4>
                  <p className="text-xs sm:text-sm text-[#31363F] mt-1">Seamless integration with your existing systems and workflows</p>
                </div>
                <div className="border-l-4 border-[#76ABAE] pl-3 lg:pl-4">
                  <h4 className="font-semibold text-sm sm:text-base text-[#222831]">Performance Optimization</h4>
                  <p className="text-xs sm:text-sm text-[#31363F] mt-1">Continuous monitoring and optimization for peak performance</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222831] mb-4 lg:mb-6">Our Development Process</h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#31363F] max-w-3xl mx-auto">
              A proven methodology that ensures successful delivery of AI solutions tailored to your specific requirements.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#76ABAE] text-[#EEEEEE] rounded-full flex items-center justify-center mx-auto mb-4 text-sm sm:text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-2 lg:mb-3">{step.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-[#31363F] leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#76ABAE] text-[#EEEEEE]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our AI solutions can drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button variant="ghost" size="lg" className="bg-[#EEEEEE] text-[#76ABAE] hover:bg-[#EEEEEE]/90">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-[#EEEEEE] text-[#EEEEEE] hover:bg-[#EEEEEE] hover:text-[#76ABAE]">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;