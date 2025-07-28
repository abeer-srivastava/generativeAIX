import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Card from '../ui/Card';
import { teamMembers } from '../../data/team';

const ContactInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Contact Methods */}
              <Card className="text-center">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+918953839476</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri 9AM-6PM</p>
              </Card>
              
              <Card className="text-center">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">generativeAix@gmail.com</p>
                <p className="text-sm text-gray-500 mt-1">We'll respond within 24hrs</p>
              </Card>
              
              <Card className="text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">New Delhi, India</p>
                <p className="text-sm text-gray-500 mt-1">Schedule an appointment</p>
              </Card>
              
              <Card className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
                <p className="text-sm text-gray-500 mt-1">Sat: 10AM-4PM</p>
              </Card>
            </div>
          </div>
          
          {/* Team Contact */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h3>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <Card key={member.id} className="flex items-center space-x-4" padding="sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Phone size={12} className="text-gray-400" />
                      <span className="text-xs text-gray-500">{member.phone}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;