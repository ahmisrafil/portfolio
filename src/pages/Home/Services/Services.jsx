import { motion } from 'framer-motion';
import React from 'react';
import { BsCode, BsBrush, BsGraphUp } from 'react-icons/bs'; // Icons for each service
import { fadeIn } from '../../../variants'; // Adjust the path based on your project

// Updated services array with new descriptions
const services = [
  {
    name: "Front-End Development",
    description:
      'I create responsive, high-performance websites using the latest front-end technologies. Bringing designs to life with clean, efficient code.',
    icon: <BsCode />
  },
  {
    name: "MERN Stack Development",
    description:
      'Building scalable, full-stack web applications using MongoDB, Express, React, and Node.js. Delivering seamless experiences from front to back.',
    icon: <BsCode />
  },
  {
    name: "UI/UX Design",
    description:
      'Crafting user-centered designs that combine aesthetics and usability. Ensuring that every interaction feels intuitive and meaningful.',
    icon: <BsBrush />
  },
  {
    name: "Digital Marketing",
    description:
      'Boosting your online presence with data-driven strategies, including SEO, social media marketing, and content optimization.',
    icon: <BsGraphUp />
  }
];

const Services = () => {
  return (
    <div className="section relative py-20" id="services">
      {/* Gradient background */}
      <div className="absolute inset-0  z-0"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-10 text-white"
        >
          <h2 className="text-3xl text-center sm:text-5xl lg:text-6xl font-bold bg-gradient-to-l from-cyan-800 via-pink-200 to-red-800 bg-clip-text text-transparent mb-8 mx-4">My Services</h2>
          <h3 className="h3 mb-16 text-lg">I bring 2 years of expertise in web development and design.</h3>
        </motion.div>

        {/* Grid layout for services with Glassmorphism effect */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:mx-20 gap-10"
        >
          {services.map((service, index) => {
            const { name, description, icon } = service;
            return (
              <div 
                key={index}
                className="p-8 bg-white/20 backdrop-blur-md border  border-white/30 rounded-xl shadow-lg hover:scale-105  hover:shadow-2xl transition-all duration-300 transform"
              >
                <div className="text-5xl mb-4 text-white">
                  {icon} {/* Display the relevant icon */}
                </div>
                <h4 className="text-xl font-semibold mb-4 text-white">{name}</h4>
                <p className="text-base leading-relaxed text-gray-200">{description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
