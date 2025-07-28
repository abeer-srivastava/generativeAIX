import React from 'react';
import { timelineData } from '../../data/timeline';
import { CheckCircle } from 'lucide-react';

const Timeline = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600">Key milestones in our AI innovation story</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>
            
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-start mb-8">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10">
                  <CheckCircle className="text-white" size={24} />
                </div>
                
                {/* Content */}
                <div className="ml-8 bg-white p-6 rounded-lg shadow-md flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <span className="text-blue-600 font-medium">{item.year}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                  {item.achievements && (
                    <ul className="mt-3 space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;