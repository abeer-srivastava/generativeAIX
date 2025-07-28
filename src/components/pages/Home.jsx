
import React from 'react';
import Hero from '../pages/Hero';
import ServicesGrid from '../sections/ServicesGrid';

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesGrid showAll={false} />
      
      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p>AI Solutions Delivered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p>Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">24/7</h3>
              <p>Support Available</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">3+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/team-meeting.jpg" 
                alt="Team meeting" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Learn About Us</h2>
              <p className="text-gray-600 mb-4">
                We are a leading technology company specializing in artificial intelligence and 
                the power of generative AI. From automated chatbots to machine learning, document digitization, and intelligent data scraping — our 
                solutions are designed to transform your business operations.
              </p>
              <p className="text-gray-600 mb-6">
                We also offer real-time text translation, encrypt-based text-to-image 
                generation, AI-powered frontend development, and easy-to-follow 
                learning tutorials. Our mission is to make AI accessible to everyone while 
                ensuring sustainability & pace at an accessible pricing for smart automation 
                and business scalability.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Services</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore a comprehensive suite of AI-driven solutions designed to enhance and 
            supercharge your business operations. From intelligent automation, conversational AI integration to your 
            fingertips.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Auto Blog</h3>
              <p className="text-sm text-gray-600">
                Generate high-quality blog content using AI-powered writing assistance.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Resume Builder</h3>
              <p className="text-sm text-gray-600">
                Create effective professional CVs instantly with AI optimization and expert-level formatting.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Lang. Translator</h3>
              <p className="text-sm text-gray-600">
                Translate text across multiple languages with real-time AI language processing.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Docx. Converter</h3>
              <p className="text-sm text-gray-600">
                Convert documents across formats like PDF, DOCX, HTML with intelligent AI processing.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Job Scrapping</h3>
              <p className="text-sm text-gray-600">
                Automatically scrape job opportunities from various platforms and stay ahead in your search.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8 8a1 1 0 100-2h-3a1 1 0 100 2h3z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Text Generation</h3>
              <p className="text-sm text-gray-600">
                Generate useful and contextual text for various use cases using advanced AI models.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Img Generation</h3>
              <p className="text-sm text-gray-600">
                Create AI-generated images from text prompts using state-of-the-art diffusion models.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Frontend Dev.</h3>
              <p className="text-sm text-gray-600">
                Create high-level modern responsive web applications using artificial intelligence and code generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tutorial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Learning Tutorial</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/learning-session.jpg" 
                alt="Learning session" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Start Your AI Learning Journey</h3>
              <p className="text-gray-600 mb-6">
                Explore our comprehensive AI, Auto-blogging, and GPT hands-on tutorials with interactive UI coding. Learn by doing with practical and real-world examples.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  Dive into Generative AI
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  Auto Blogging with GPT
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  Build Real AI Projects
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  Learn at Your Own Pace
                </li>
              </ul>
              
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <button className="w-full text-left font-semibold text-gray-800 hover:text-blue-600 transition">
                    What is GenerativeAiX used for?
                  </button>
                  <p className="text-gray-600 mt-2 text-sm">
                    GenerativeAiX is a platform offering AI-powered solutions for content creation, automation, 
                    translation, and much more to accelerate and enhance productivity.
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <button className="w-full text-left font-semibold text-gray-800 hover:text-blue-600 transition">
                    Can I generate images from text prompts?
                  </button>
                  <p className="text-gray-600 mt-2 text-sm">
                    Yes, our platform includes advanced text-to-image generation capabilities using state-of-the-art AI models.
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <button className="w-full text-left font-semibold text-gray-800 hover:text-blue-600 transition">
                    Is there a learning tutorial available?
                  </button>
                  <p className="text-gray-600 mt-2 text-sm">
                    Absolutely! We provide comprehensive tutorials and hands-on learning experiences for all skill levels.
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <button className="w-full text-left font-semibold text-gray-800 hover:text-blue-600 transition">
                    What pricing plans do you offer?
                  </button>
                  <p className="text-gray-600 mt-2 text-sm">
                    We offer flexible pricing plans starting from basic free tier to premium enterprise solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <img 
                src="/images/faq-illustration.jpg" 
                alt="FAQ illustration" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI-powered solutions to automate processes, 
            generate content, and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Get Started Free
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;