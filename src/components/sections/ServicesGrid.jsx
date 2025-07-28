import React from 'react';
import Card from '../ui/Card';
import { services } from '../../data/services';

const ServicesGrid = ({ showAll = true, limit = 4 }) => {
  const displayServices = showAll ? services : services.slice(0, limit);

  return (
    <section className="py-16 bg-[#EEEEEE]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#222831] mb-4">Our AI Services</h2>
          <p className="text-xl text-[#31363F] max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered tools and services designed to transform your business operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#76ABAE] to-[#31363F] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-[#EEEEEE]" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#222831] mb-3">{service.title}</h3>
                <p className="text-[#31363F] text-sm leading-relaxed">{service.description}</p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-[#76ABAE]/20 text-[#76ABAE] text-xs font-medium rounded-full">
                    {service.category}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;