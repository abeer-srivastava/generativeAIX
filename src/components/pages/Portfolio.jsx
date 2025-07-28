import React from 'react';
import PortfolioFilter from '../sections/PortfolioFilter';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { TrendingUp, Users, Star, Award } from 'lucide-react';

const Portfolio = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "50+",
      label: "Projects Completed",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Users,
      value: "100+", 
      label: "Happy Clients",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Client Rating",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Award,
      value: "3+",
      label: "Years Experience",
      color: "from-purple-600 to-purple-700"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      content: "GenerativeAix transformed our content strategy with their AI blog generator. We've seen 300% increase in organic traffic!",
      rating: 5
    },
    {
      name: "Michael Chen", 
      company: "StartupXYZ",
      content: "The resume builder they created helped our HR team streamline recruitment. Absolutely fantastic work!",
      rating: 5
    },
    {
      name: "Emily Davis",
      company: "Global Solutions",
      content: "Their language translator broke down communication barriers for our international team. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the innovative AI solutions we've built for clients across various industries. 
              Each project showcases our commitment to excellence and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <PortfolioFilter />

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">What our clients say about our work</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our satisfied clients and transform your business with AI
          </p>
          <Button variant="ghost" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Discuss Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;