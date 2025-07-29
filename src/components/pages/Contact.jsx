import React, { useState } from 'react';
import ContactInfo from '../sections/ContactInfo';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  MessageSquare,
  Clock,
  Globe
} from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const serviceOptions = [
    'Auto Blog Generator',
    'Resume Builder', 
    'Language Translator',
    'Image Generator',
    'Chat Bot',
    'Code Generator',
    'Data Analyzer',
    'Process Automator',
    'Custom AI Solution'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our AI experts",
      contact: COMPANY_INFO.phone,
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us", 
      description: "Send us your detailed requirements",
      contact: COMPANY_INFO.email,
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Meet us at our office",
      contact: COMPANY_INFO.address,
      action: "Get Directions"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#EEEEEE] to-[#76ABAE]/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-[#222831] mb-6">Get In Touch</h1>
            <p className="text-xl text-[#31363F] mb-8 leading-relaxed">
              Ready to transform your business with AI? We're here to help you every step of the way. 
              Contact our team of experts and let's discuss your AI needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-[#EEEEEE]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#76ABAE] to-[#31363F] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-[#EEEEEE]" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#222831] mb-2">{method.title}</h3>
                  <p className="text-[#31363F] text-sm mb-3">{method.description}</p>
                  <p className="text-[#76ABAE] font-medium mb-4">{method.contact}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {method.action}
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-3xl font-bold text-[#222831] mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#222831] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-[#31363F] rounded-lg focus:ring-2 focus:ring-[#76ABAE] focus:border-transparent bg-[#EEEEEE] text-[#222831]"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#222831] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-[#31363F] rounded-lg focus:ring-2 focus:ring-[#76ABAE] focus:border-transparent bg-[#EEEEEE] text-[#222831]"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#222831] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#31363F] rounded-lg focus:ring-2 focus:ring-[#76ABAE] focus:border-transparent bg-[#EEEEEE] text-[#222831]"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#222831] mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#31363F] rounded-lg focus:ring-2 focus:ring-[#76ABAE] focus:border-transparent bg-[#EEEEEE] text-[#222831]"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#222831] mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#31363F] rounded-lg focus:ring-2 focus:ring-[#76ABAE] focus:border-transparent bg-[#EEEEEE] text-[#222831]"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#222831] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-[#31363F] rounded-lg focus:ring-2 focus:ring-[#76ABAE] focus:border-transparent bg-[#EEEEEE] text-[#222831]"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Office Hours */}
              <Card>
                <div className="flex items-center mb-4">
                  <Clock className="text-[#76ABAE] mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-[#222831]">Office Hours</h3>
                </div>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-[#31363F]">{schedule.day}</span>
                      <span className="text-[#222831] font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Contact */}
              <Card>
                <div className="flex items-center mb-4">
                  <Globe className="text-[#76ABAE] mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-[#222831]">Quick Contact</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Phone className="text-[#31363F] mr-2" size={16} />
                    <span className="text-[#31363F]">{COMPANY_INFO.phone}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="text-[#31363F] mr-2" size={16} />
                    <span className="text-[#31363F]">{COMPANY_INFO.email}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="text-[#31363F] mr-2" size={16} />
                    <span className="text-[#31363F]">{COMPANY_INFO.address}</span>
                  </div>
                </div>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Support</h3>
                <p className="text-red-600 text-sm mb-3">
                  For critical issues with existing AI systems
                </p>
                <Button variant="outline" size="sm" className="w-full border-red-300 text-red-600 hover:bg-red-600 hover:text-white">
                  Call Emergency Line
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <ContactInfo />

      {/* FAQ Section */}
      <section className="py-16 bg-[#EEEEEE]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-[#31363F]">Quick answers to common questions</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-lg font-semibold text-[#222831] mb-2">
                  How quickly can you deliver an AI solution?
                </h3>
                <p className="text-[#31363F] text-sm">
                  Depending on complexity, most projects are completed within 2-8 weeks. 
                  We provide detailed timelines during our initial consultation.
                </p>
              </Card>
              
              <Card>
                <h3 className="text-lg font-semibold text-[#222831] mb-2">
                  Do you provide ongoing support?
                </h3>
                <p className="text-[#31363F] text-sm">
                  Yes, we offer 24/7 support, regular updates, and maintenance for all 
                  our AI solutions to ensure optimal performance.
                </p>
              </Card>
              
              <Card>
                <h3 className="text-lg font-semibold text-[#222831] mb-2">
                  Can you integrate with existing systems?
                </h3>
                <p className="text-[#31363F] text-sm">
                  Absolutely! Our AI solutions are designed to seamlessly integrate 
                  with your current infrastructure and workflows.
                </p>
              </Card>
              
              <Card>
                <h3 className="text-lg font-semibold text-[#222831] mb-2">
                  What industries do you serve?
                </h3>
                <p className="text-[#31363F] text-sm">
                  We work across all industries including healthcare, finance, 
                  e-commerce, education, and manufacturing.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;