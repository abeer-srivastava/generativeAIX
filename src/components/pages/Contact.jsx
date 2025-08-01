import React, { useState } from 'react';
// Added more icons for the new sections
import { Phone, Mail, MapPin, Send, Linkedin, Twitter, Calendar, QrCode } from 'lucide-react';

// You would get this from your social media profiles
const SOCIAL_LINKS = {
    linkedin: '#',
    twitter: '#'
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const serviceOptions = [
    'Auto Blog Generator', 'Resume Builder', 'Language Translator', 'Image Generator',
    'Chat Bot', 'Code Generator', 'Custom AI Solution', 'Other'
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#76ABAE] to-[#222831]">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Have a project in mind or just want to learn more? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto shadow-2xl rounded-xl overflow-hidden bg-white">
            <div className="grid lg:grid-cols-3">
              
              <div className="lg:col-span-1 bg-gradient-to-b from-[#31363F] to-[#222831] p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  Fill out the form, and our team will get back to you within 24 hours.
                </p>
                <div className="space-y-6">
                  <a href="tel:+918953839476" className="flex items-center space-x-3 group">
                    <Phone className="text-[#76ABAE] group-hover:animate-pulse" size={20} />
                    <span className="text-gray-300 group-hover:text-white transition-colors">+91 89538 39476</span>
                  </a>
                  <a href="mailto:generativeaixtech@gmail.com" className="flex items-center space-x-3 group">
                    <Mail className="text-[#76ABAE] group-hover:animate-pulse" size={20} />
                    <span className="text-gray-300 group-hover:text-white transition-colors">generativeaixtech@gmail.com</span>
                  </a>
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-[#76ABAE] mt-1" size={20} />
                    <span className="text-gray-300">Lucknow, India</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Full Name *" className="w-full px-4 py-3 border-b-2 border-gray-200 focus:outline-none focus:border-[#76ABAE] transition-colors" />
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email Address *" className="w-full px-4 py-3 border-b-2 border-gray-200 focus:outline-none focus:border-[#76ABAE] transition-colors" />
                  </div>
                  <div>
                    <select name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 border-b-2 border-gray-200 focus:outline-none focus:border-[#76ABAE] transition-colors bg-white">
                      <option value="">Select a service of interest</option>
                      {serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}
                    </select>
                  </div>
                  <div>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={5} placeholder="Your Message *" className="w-full px-4 py-3 border-b-2 border-gray-200 focus:outline-none focus:border-[#76ABAE] transition-colors resize-none"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-[#76ABAE] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#31363F] transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center">
                      <Send className="mr-2" size={20} />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- NEW: Schedule a Meeting Section --- */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Calendar size={48} className="mx-auto text-[#76ABAE] mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#222831]">Schedule a Meeting</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto mb-8">
            Eliminate the back-and-forth. Book a time that works for you directly on our calendar.
          </p>
          {/* Calendly Widget Placeholder */}
          <div className="max-w-4xl mx-auto h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            <p>Your Calendly or other scheduling widget embed goes here.</p>
          </div>
        </div>
      </section>

      {/* --- NEW: Connect With Us Section --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Social Links */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-800">Connect With Us</h2>
              <p className="text-gray-600 mt-2 mb-6">Follow us on social media for the latest AI news and company updates.</p>
              <div className="flex justify-center lg:justify-start space-x-4">
                  <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-4 rounded-full text-gray-600 hover:bg-[#76ABAE] hover:text-white transition-colors duration-300">
                      <Twitter size={24} />
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-4 rounded-full text-gray-600 hover:bg-[#76ABAE] hover:text-white transition-colors duration-300">
                      <Linkedin size={24} />
                  </a>
              </div>
            </div>
            {/* QR Code */}
            <div className="flex flex-col items-center">
                <QrCode size={48} className="text-[#76ABAE] mb-4"/>
                <h3 className="text-2xl font-bold text-gray-800">Save Our Contact</h3>
                <p className="text-gray-600 mt-2 mb-4">Scan with your phone to add us to your contacts.</p>
                <div className="p-2 border rounded-lg bg-white">
                    {/* Replace with your actual vCard QR Code Image */}
                    <img src="/images/contact-qrcode.png" alt="vCard QR Code" className="w-32 h-32" />
                </div>
            </div>
          </div>
        </div>
      </section>
       {/* Map Section */}
      <section className="pb-20">
          <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Our Location</h2>
                <p className="text-gray-600 mt-2">We are located in the heart of Lucknow's IT hub, Gomti Nagar.</p>
              </div>
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-xl">
                  {/* To get your own map: 1. Go to Google Maps. 2. Find your location. 3. Click Share -> Embed a map. 4. Copy the HTML and paste the 'src' link below. */}
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.9337575531!2d80.80242484438366!3d26.84862217122398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1692215320577!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Contact;