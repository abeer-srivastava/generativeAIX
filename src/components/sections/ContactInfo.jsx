import React from 'react';
<<<<<<< Updated upstream
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Card from '../ui/Card';
import { teamMembers } from '../../data/team';
import { COMPANY_INFO } from '../../utils/constants';
=======
// Adding more icons for a richer UI
import { Phone, Mail, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react';
>>>>>>> Stashed changes

// --- Data for the component ---
// It's better to manage data in arrays for easier updates.
const contactMethods = [
    {
        icon: <Phone size={24} />,
        title: "Call Us",
        details: "+91 89538 39476",
        actionText: "Mon-Fri 9AM-6PM",
        href: "tel:+918953839476"
    },
    {
        icon: <Mail size={24} />,
        title: "Email Us",
        details: "generativeaixtech@gmail.com",
        actionText: "Response within 24 hours",
        href: "mailto:generativeaixtech@gmail.com"
    },
    {
        icon: <MapPin size={24} />,
        title: "Visit Us",
        details: "Gomti Nagar, Lucknow, India",
        actionText: "Get Directions",
        href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.9337575531!2d80.80242484438366!3d26.84862217122398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1692215320577!5m2!1sen!2sin" // Link to your Google Maps location
    }
];

// --- The Main ContactInfo Component ---
const ContactInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
<<<<<<< Updated upstream
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#222831] mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Contact Methods */}
              <Card className="text-center">
                <Phone className="w-12 h-12 text-[#76ABAE] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-[#31363F]">{COMPANY_INFO.phone}</p>
                <p className="text-sm text-[#31363F]/70 mt-1">Mon-Fri 9AM-6PM</p>
              </Card>
              
              <Card className="text-center">
                <Mail className="w-12 h-12 text-[#76ABAE] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-[#31363F]">{COMPANY_INFO.email}</p>
                <p className="text-sm text-[#31363F]/70 mt-1">We'll respond within 24hrs</p>
              </Card>
              
              <Card className="text-center">
                <MapPin className="w-12 h-12 text-[#76ABAE] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-[#31363F]">{COMPANY_INFO.address}</p>
                <p className="text-sm text-[#31363F]/70 mt-1">Schedule an appointment</p>
              </Card>
              
              <Card className="text-center">
                <Clock className="w-12 h-12 text-[#76ABAE] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                <p className="text-[#31363F]">Mon-Fri: 9AM-6PM</p>
                <p className="text-sm text-[#31363F]/70 mt-1">Sat: 10AM-4PM</p>
              </Card>
            </div>
          </div>
          
          {/* Team Contact */}
=======
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Column: Get In Touch */}
>>>>>>> Stashed changes
          <div>
            <span className="text-[#76ABAE] font-semibold">CONTACT US</span>
            <h2 className="text-3xl md:text-4xl font-bold my-4 text-[#222831]">
              Get in Touch Today
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              We're here to answer your questions, discuss your project, or provide you with a detailed quote. Reach out to us through your preferred method.
            </p>
            
            <div className="space-y-6">
              {contactMethods.map((method) => (
                <a 
                  key={method.title} 
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-lg group hover:bg-[#76ABAE] transition-all duration-300"
                >
                  <div className="bg-[#76ABAE] text-white p-4 rounded-md group-hover:bg-white group-hover:text-[#76ABAE] transition-all duration-300">
                    {method.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">{method.title}</h3>
                    <p className="text-gray-600 group-hover:text-white/80">{method.details}</p>
                  </div>
                  <div className="ml-auto text-gray-400 group-hover:text-white transition-opacity duration-300">
                    <ArrowRight size={20} />
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
                <p className="text-gray-600 mb-4">Or connect with us on social media:</p>
                <div className="flex space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-[#31363F] hover:text-white transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-[#31363F] hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
            </div>
          </div>

          {/* Right Column: Get a Quote Form */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-[#222831] mb-6">Get a Free Quote</h3>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" name="name" className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#76ABAE]" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" id="email" name="email" className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#76ABAE]" />
                </div>
                <div>
                    <label htmlFor="service" className="text-sm font-medium text-gray-700">Service of Interest</label>
                    <select id="service" name="service" className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#76ABAE] bg-white">
                        <option>Auto Blog Generator</option>
                        <option>Resume Builder</option>
                        <option>Custom AI Solution</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="4" className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#76ABAE] resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#76ABAE] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#31363F] transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    Submit Request
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;