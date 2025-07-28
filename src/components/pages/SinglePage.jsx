import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { services } from '../../data/services';
import { 
  CheckCircle, 
  X, 
  Star, 
  Users, 
  Clock, 
  Shield,
  Zap,
  Target
} from 'lucide-react';

const SinglePage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const comparisonFeatures = [
    "Custom AI Development",
    "24/7 Support", 
    "Scalable Solutions",
    "Data Security",
    "Regular Updates",
    "Training Included",
    "API Integration",
    "Cloud Deployment"
  ];

  
  const whyChooseUs = [
    {
      icon: Star,
      title: "Industry Expertise",
      description: "3+ years of experience in AI development across multiple industries"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified AI specialists and machine learning engineers"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Rapid deployment with agile development methodology"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: Zap,
      title: "Cutting-edge Tech",
      description: "Latest AI models and frameworks for optimal performance"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering measurable business outcomes"
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Complete AI Solutions Hub
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Everything you need to transform your business with artificial intelligence. 
              From consultation to deployment, we provide end-to-end AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Button size="lg">Start Your AI Journey</Button>
              <Button variant="outline" size="lg">View All Services</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Tools & Services</h2>
            <p className="text-xl text-gray-600">Comprehensive suite of AI-powered solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id} 
                  className="text-center cursor-pointer transform hover:scale-105 transition-transform duration-200"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.description.substring(0, 80)}...</p>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    {service.category}
                  </span>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Feature Comparison</h2>
            <p className="text-xl text-gray-600">See what makes our AI solutions superior</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Basic</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Professional</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm text-gray-900">{feature}</td>
                        <td className="px-6 py-4 text-center">
                          {index < 4 ? (
                            <CheckCircle className="text-green-500 mx-auto" size={20} />
                          ) : (
                            <X className="text-gray-400 mx-auto" size={20} />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {index < 6 ? (
                            <CheckCircle className="text-green-500 mx-auto" size={20} />
                          ) : (
                            <X className="text-gray-400 mx-auto" size={20} />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <CheckCircle className="text-green-500 mx-auto" size={20} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
    

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose GenerativeAix?</h2>
            <p className="text-xl text-gray-600">The advantages that set us apart</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with our AI solutions today and see the difference
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button variant="ghost" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={selectedService?.title}
        size="lg"
      >
        {selectedService && (
          <div>
            <div className="flex items-center mb-4">
              {React.createElement(selectedService.icon, { 
                className: "text-blue-600 mr-3", 
                size: 32 
              })}
              <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                {selectedService.category}
              </span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {selectedService.description}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Advanced AI algorithms</li>
                  <li>• Real-time processing</li>
                  <li>• Custom integration</li>
                  <li>• 24/7 support</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Increased efficiency</li>
                  <li>• Cost reduction</li>
                  <li>• Improved accuracy</li>
                  <li>• Scalable solution</li>
                </ul>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SinglePage;