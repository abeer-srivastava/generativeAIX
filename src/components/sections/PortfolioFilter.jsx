import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { portfolioItems } from '../../data/portfolio';
import { ExternalLink, Eye } from 'lucide-react';

const PortfolioFilter = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const filters = ['ALL', 'GENERATOR', 'TOOL', 'AI'];
  
  const filteredItems = activeFilter === 'ALL' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our successful AI projects and solutions
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'primary' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className="px-6 py-2"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden group" padding="none">
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Eye className="text-white" size={24} />
                    </div>
                    <p className="text-gray-600 font-medium">{item.title}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="ghost" className="text-white border-white hover:bg-white hover:text-blue-600">
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioFilter;