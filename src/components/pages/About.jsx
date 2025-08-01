import React from 'react';
// Import necessary icons from lucide-react
import { User, Linkedin, Twitter, Rocket, Users, Handshake, Briefcase, Building2,X } from 'lucide-react';

// --- DATA: Easily update team & timeline here ---

// TODO: Update image paths and add real social links
const teamMembers = [
  {
    name: "Amar Rai",
    role: "Co-Founder & Frontend Developer",
    image: "/images/team/Amar_Rai.png", // Example path
    socials: { linkedin: 'https://www.linkedin.com/in/amar-rai-91114725b/', twitter: 'https://x.com/AmarRai4ssmpbg' }
  },
  {
    name: "Ansh Agnihotri",
    role: "Co-Founder & Backend Engineer",
    image: "/images/team/AnshAgnihotri.jpeg", // Example path
    socials: { linkedin: 'https://www.linkedin.com/in/ansh-agnihotri01', twitter: 'https://x.com/AnshAgni01?t=orEFfbL96kNgZUeRx07JWA&s=08' }
  },
  {
    name: "Aman Tiwari",
    role: "Co-Founder & AI Lead",
    image: "/images/team/Aman_Tiwari.jpg", // Example path
    socials: { linkedin: 'https://www.linkedin.com/in/aman-tiwari-50821620a', twitter: 'https://x.com/AmanTiwari__0?t=n1CDazCNeF2VZa3crmHZzw&s=09' }
  },
  {
    name: "Aman Pandey",
    role: "Co-Founder & UI/UX Designer",
    image: "/images/team/Aman_Pandey.jpg", // Example path
    socials: { linkedin: 'https://www.linkedin.com/in/aman-pandey-aa6020253', twitter: ' https://x.com/03Aman_073?t=NPSEt9fJiXmDEldKvn2-wg&s=08' }
  }
];

const timelineData = [
  {
    year: "2025",
    events: [
      { date: "15 Jul", title: "Company Founded", desc: "GenerativeAiX was officially launched to make AI accessible for businesses.", icon: <Rocket size={20}/> },
      { date: "01 Aug", title: "Assembled Core Team", desc: "A handpicked team of AI enthusiasts and engineers came together.", icon: <Users size={20}/> },
      { date: "01 Sep", title: "First Client Collaboration", desc: "Partnered with a startup to integrate our AI-generated blog engine.", icon: <Handshake size={20}/> },
      { date: "01 Oct", title: "Launched GenAI Blog Engine", desc: "Released our first flagship product to early adopters.", icon: <Briefcase size={20}/> },
      { date: "01 Dec", title: "Opened First Office", desc: "Established our physical workspace in Lucknow to foster collaboration.", icon: <Building2 size={20}/> }
    ]
  }
];


// --- Sub-Components for a cleaner structure ---

const TeamCard = ({ member }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
    <div className="relative w-40 h-40 mx-auto">
      <img
        src={member.image || ''}
        alt={member.name}
        className="rounded-full w-full h-full object-cover border-4 border-gray-200"
      />
      {/* Social Icons on Hover */}
      <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#76ABAE]"><Linkedin size={24} /></a>
        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#76ABAE]"><X size={20} /></a>
      </div>
    </div>
    <h3 className="font-bold text-xl text-gray-800 mt-4 mb-1">{member.name}</h3>
    <p className="text-[#76ABAE] font-medium text-center">{member.role}</p>
  </div>
);

const TimelineItem = ({ event, index }) => {
    const isLeft = index % 2 === 0;
    return (
        <div className={`flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
            <div className={`w-1/2 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                    <div className="flex items-center mb-2">
                        <span className="text-[#76ABAE] mr-2">{event.icon}</span>
                        <h4 className="font-bold text-gray-800">{event.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{event.desc}</p>
                    <time className="text-xs text-gray-400 mt-2 block">{event.date}, 2025</time>
                </div>
            </div>
        </div>
    );
};

// --- Main About Page Component ---

const About = () => (
  <div>
    {/* Page Header Section */}
    <section className="py-20 text-center bg-gradient-to-br from-[#76ABAE] to-[#76ABAE]\2">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#222831]">About Us</h1>
        <p className="text-lg text-gray-600 mt-5 max-w-3x1 mx-auto">
          We are a team of innovators and AI specialists dedicated to building intelligent solutions that drive business growth and efficiency.
        </p>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222831] mb-2">Meet Our Team</h2>
          <p className="text-lg text-gray-600">The passionate minds shaping the future of AI.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => <TeamCard key={member.name} member={member} />)}
        </div>
      </div>
    </section>

    {/* Timeline Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222831] mb-2">Our Story</h2>
          <p className="text-lg text-gray-600">From a bold vision to a beacon of innovation.</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200" />
          
          {timelineData.map((yearBlock) => (
            <div key={yearBlock.year} className="relative mb-8">
              <div className="sticky top-20 flex justify-center">
                 <span className="bg-[#76ABAE] text-white font-bold px-6 py-2 rounded-lg shadow-lg">{yearBlock.year}</span>
              </div>
              <div className="mt-8 space-y-8">
                {yearBlock.events.map((event, index) => (
                   <div key={event.title} className="relative">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#76ABAE] rounded-full border-4 border-white" />
                      <TimelineItem event={event} index={index} />
                   </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;