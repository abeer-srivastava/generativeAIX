import React from 'react';
import Timeline from '../sections/Timeline';
import { Users, Target, Award, Lightbulb } from 'lucide-react';
import Card from '../ui/Card';
import { teamMembers } from '../../data/team';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously push the boundaries of AI technology to create groundbreaking solutions."
    },
    {
      icon: Users,
      title: "Collaboration", 
      description: "We work closely with our clients to understand their needs and deliver customized AI solutions."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality AI implementations."
    },
    {
      icon: Award,
      title: "Reliability",
      description: "Our clients trust us to deliver robust, scalable AI solutions that drive real business results."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About GenerativeAix</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are pioneers in generative artificial intelligence, dedicated to transforming businesses 
              through innovative AI solutions. Our team of expert developers and AI specialists work 
              tirelessly to create cutting-edge technologies that solve real-world problems.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">3+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
                <p className="text-gray-600">AI Solutions Delivered</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">100+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To democratize artificial intelligence by making advanced AI technologies accessible 
                to businesses of all sizes. We believe that every organization should have the power 
                to leverage AI for growth, innovation, and competitive advantage.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to bridge the gap between complex AI research and practical business 
                applications, ensuring that our clients can harness the full potential of generative 
                AI without the technical complexity.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To become the global leader in generative AI solutions, recognized for our innovation, 
                reliability, and commitment to client success. We envision a future where AI seamlessly 
                integrates into every aspect of business operations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We strive to create a world where artificial intelligence amplifies human creativity 
                and productivity, enabling businesses to achieve unprecedented levels of efficiency 
                and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The brilliant minds behind GenerativeAix</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />
    </div>
  );
};

export default About;