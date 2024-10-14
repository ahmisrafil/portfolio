import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { fadeIn } from '../../../variants';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {  
    e.preventDefault();

    emailjs.sendForm('service_cgltyv1', 'template_kgrckm8', form.current, 'kOg1esk6AN8hV-Ddv')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="relative py-16 lg:section mx-4 lg:mx-20 text-white" id="contact">
      <div className="container mx-auto">

        <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-x-10">
          {/* Text Section */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div className="space-y-4">
              <h2 className="text-2xl uppercase text-accent font-bold tracking-wider">Get in Touch</h2>
              <h2 className="text-[40px] lg:text-[80px] font-bold leading-tight">
                Let's work <br />
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">Together!</span>
              </h2>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-6 bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <input
              className="bg-transparent border-b border-gray-500 py-4 text-lg outline-none w-full placeholder:text-gray-400 focus:border-yellow-500 transition-all"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              className="bg-transparent border-b border-gray-500 py-4 text-lg outline-none w-full placeholder:text-gray-400 focus:border-yellow-500 transition-all"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              className="bg-transparent border-b border-gray-500 py-4 text-lg outline-none w-full placeholder:text-gray-400 focus:border-yellow-500 transition-all resize-none"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <input
                type="submit"
                value="Send Message"
                className="bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold tracking-wide cursor-pointer hover:bg-yellow-600 transition-all"
              />
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
