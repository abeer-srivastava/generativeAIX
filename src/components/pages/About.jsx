import React from 'react';
import { User } from 'lucide-react';
const teamMembers = [
  {
    name: "Dharmveer Singh",
    role: "Co-Founder & AI Lead of the Company",
    image:""
  },
  {
    name: "Ansh Agnihotri",
    role: "Co-Founder & Backend Engineer",
    image: ""
  },
  {
    name: "Aman Tiwari",
    role: "Co-Founder & Frontend Developer",
    image: ""
  },
  {
    name: "Aman Pandey",
    role: "Co-Founder & UI/UX Designer",
    image: ""
  }
];

// const timeline = [
//   {
//     year: "NOW",
//     events: [
//       {
//         date: "15 Jul 2025",
//         title: "Company Founded",
//         desc: "GenerativeAiX was officially launched with the mission to make AI accessible, ethical, and powerful for creators and businesses."
//       }
//     ]
//   },
//   {
//     year: "2025",
//     events: [
//       {
//         date: "01 Aug 2025",
//         title: "Assembled Core Team",
//         desc: "A handpicked team of AI enthusiasts, engineers, and visionaries came together to lay the technological foundation.",
//         left: true
//       },
//       {
//         date: "01 Sep 2025",
//         title: "First Client Collaboration",
//         desc: "Partnered with a startup to integrate AI-generated blogs, showcasing our first real-world implementation."
//       },
//       {
//         date: "01 Oct 2025",
//         title: "Launched GenAI Blog Engine",
//         desc: "Released our first flagship product — an AI-powered blog generator that amazed the early adopters.",
//         left: true
//       },
//       {
//         date: "01 Nov 2025",
//         title: "Scaled to 10+ Projects",
//         desc: "Within months, we deployed AI-driven content across industries like e-commerce, travel, and education."
//       },
//       {
//         date: "01 Dec 2025",
//         title: "Opened Our First Office",
//         desc: "Established our physical workspace in Lucknow, fostering real collaboration and creativity.",
//         left: true
//       }
//     ]
//   },
//   {
//     year: "LAUNCH",
//     events: [
//       {
//         date: "",
//         title: "Launched GenerativeAiX on 15 July 2025",
//         desc: "A new chapter in AI innovation began, turning bold dreams into powerful products.",
//         center: true
//       }
//     ]
//   }
// ];

const About = () => (
  <div>
    {/* Team Section */}
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-700 mb-2">OUR TEAM</h2>
          <p className="text-lg text-gray-600">
            Meet the passionate minds behind GenerativeAiX — the driving force shaping our AI innovations.
          </p>
          <div className="w-16 h-1 bg-blue-200 rounded mx-auto mt-4 mb-0" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md flex flex-col items-center py-8 px-4">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-100 mb-4 flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <User size={80} color="blue" />
                  </div>
                )}
              </div>
              <h3 className="font-bold text-lg text-gray-700
               mb-1">{member.name}</h3>
              <p className="text-blue-700 font-medium text-sm text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline Section */}
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-700 mb-2">OUR STORY</h2>
          <p className="text-lg text-gray-600">
            From a bold vision to revolutionize generative AI, GenerativeAiX has grown into a beacon of innovation and transformation.
          </p>
          <div className="w-16 h-1 bg-blue-200 rounded mx-auto mt-4 mb-0" />
        </div>
        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 z-0" />
          {/* Timeline items */}
          <div className="space-y-12 relative z-10">
            {/* NOW */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold mb-2 shadow-lg">NOW</div>
              <div className="bg-white border border-blue-100 rounded-lg shadow-md px-6 py-4 mb-8 max-w-md text-left">
                <div className="flex items-center mb-2">
                  <span className="font-semibold text-gray-700 mr-2">15 Jul 2025</span>
                  <span className="text-blue-600 font-bold flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    Company Founded
                  </span>
                </div>
                <div className="text-gray-600 text-sm">
                  GenerativeAiX was officially launched with the mission to make AI accessible, ethical, and powerful for creators and businesses.
                </div>
              </div>
            </div>
            {/* 2025 */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold mb-2 shadow-lg">2025</div>
              {/* Timeline events */}
              <div className="space-y-8 w-full">
                {/* Left event */}
                <div className="flex justify-start w-full">
                  <div className="bg-white border border-blue-100 rounded-lg shadow-md px-6 py-4 max-w-md ml-0 text-left">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-gray-700 mr-2">01 Aug 2025</span>
                      <span className="text-blue-600 font-bold flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Assembled Core Team
                      </span>
                    </div>
                    <div className="text-gray-600 text-sm">
                      A handpicked team of AI enthusiasts, engineers, and visionaries came together to lay the technological foundation.
                    </div>
                  </div>
                </div>
                {/* Right event */}
                <div className="flex justify-end w-full">
                  <div className="bg-white border border-blue-100 rounded-lg shadow-md px-6 py-4 max-w-md mr-0 text-left">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-gray-700 mr-2">01 Sep 2025</span>
                      <span className="text-blue-600 font-bold flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        First Client Collaboration
                      </span>
                    </div>
                    <div className="text-gray-600 text-sm">
                      Partnered with a startup to integrate AI-generated blogs, showcasing our first real-world implementation.
                    </div>
                  </div>
                </div>
                {/* Left event */}
                <div className="flex justify-start w-full">
                  <div className="bg-white border border-blue-100 rounded-lg shadow-md px-6 py-4 max-w-md ml-0 text-left">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-gray-700 mr-2">01 Oct 2025</span>
                      <span className="text-blue-600 font-bold flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Launched GenAI Blog Engine
                      </span>
                    </div>
                    <div className="text-gray-600 text-sm">
                      Released our first flagship product — an AI-powered blog generator that amazed the early adopters.
                    </div>
                  </div>
                </div>
                {/* Right event */}
                <div className="flex justify-end w-full">
                  <div className="bg-white border border-blue-100 rounded-lg shadow-md px-6 py-4 max-w-md mr-0 text-left">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-gray-700 mr-2">01 Nov 2025</span>
                      <span className="text-blue-600 font-bold flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Scaled to 10+ Projects
                      </span>
                    </div>
                    <div className="text-gray-600 text-sm">
                      Within months, we deployed AI-driven content across industries like e-commerce, travel, and education.
                    </div>
                  </div>
                </div>
                {/* Left event */}
                <div className="flex justify-start w-full">
                  <div className="bg-white border border-blue-100 rounded-lg shadow-md px-6 py-4 max-w-md ml-0 text-left">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-gray-700 mr-2">01 Dec 2025</span>
                      <span className="text-blue-600 font-bold flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Opened Our First Office
                      </span>
                    </div>
                    <div className="text-gray-600 text-sm">
                      Established our physical workspace in Lucknow, fostering real collaboration and creativity.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* LAUNCH */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-sm font-bold mb-2 shadow-lg">LAUNCH</div>
              <div className="bg-white border border-blue-100 rounded-lg shadow-md px-6 py-4 mb-8 max-w-md text-center">
                <span className="font-bold text-gray-700">Launched GenerativeAiX on 15 July 2025</span>
                <div className="text-gray-600 text-sm mt-2">
                  A new chapter in AI innovation began, turning bold dreams into powerful products.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About