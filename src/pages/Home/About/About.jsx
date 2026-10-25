// import { motion } from 'framer-motion'
// import React from 'react';
// import israfil from '../../../assets/ahmisrafilcopy.png'

// const textVariants = {
//     initial: {
//         x: -500,
//         opacity: 0,
//     },
//     animate: {
//         x: 0,
//         opacity: 1,
//         transition: {
//             duration: 1,
//             staggerChildren: 0.1,
//         },
//     },
//     scrollButton: {
//         opacity: 0,
//         y: 10,
//         transition: {
//             duration: 2,
//             repeat: Infinity,
//         },
//     },
// };



// const About = () => {
//     return (
//         <div >
//             <motion.div className='lg:mx-20 my-20 flex flex-col lg:flex-row lg:gap-36 justify-center text-white px-4 sm:px-6'
//                 variants={textVariants}
//                 initial="initial"
//                 animate="animate">
//                 <div className='flex justify-center lg:justify-start'>
//                     <motion.img
//                         variants={textVariants}
//                         // src="https://i.ibb.co.com/NS4Hfw1/ahmisrafilcopy.png"
//                         src={israfil}
//                         className='h-[200px] sm:h-[300px] lg:h-[400px] rounded-full border-2 bg-gradient-to-bl from-[#161d21] via-purple-600 to-pink-400'
//                         alt="md_israfil" />
//                 </div>
//                 <div className='mt-8 lg:mt-0 text-center'>
//                     <motion.h3 variants={textVariants} className='text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-l from-gray-400 via-pink-600 to-red-500 bg-clip-text text-transparent mb-8 mx-4'>
//                         ABOUT ME
//                     </motion.h3>
//                     <div className='flex flex-col lg:gap-2 mx-4 lg:text-2xl text-base sm:text-lg'>
//                         <div className='flex flex-row gap-12 sm:gap-24'>
//                             <motion.h3 variants={textVariants} className='font-semibold'>Name :</motion.h3>
//                             <motion.h3 variants={textVariants}>Md. Israfil Mia</motion.h3>
//                         </div>
//                         <div className='flex flex-row gap-4 sm:gap-6'>
//                             <motion.h3 variants={textVariants} className='font-semibold'>Date of Birth :</motion.h3>
//                             <motion.h3 variants={textVariants}>February 12, 1998</motion.h3>
//                         </div>
//                         <div className='flex flex-row gap-[40px] sm:gap-[74px]'>
//                             <motion.h3 variants={textVariants} className='font-semibold'>Address :</motion.h3>
//                             <motion.h3 variants={textVariants}>Khilkhet, Dhaka</motion.h3>
//                         </div>
//                         <div className='flex flex-row gap-[50px] sm:gap-[98px]'>
//                             <motion.h3 variants={textVariants} className='font-semibold'>Email :</motion.h3>
//                             <motion.h3 variants={textVariants}>ahmisrafilcse@gmail.com</motion.h3>
//                         </div>
//                         <div className='flex flex-row gap-[45px] sm:gap-[91px]'>
//                             <motion.h3 variants={textVariants} className='font-semibold'>Phone :</motion.h3>
//                             <motion.h3 variants={textVariants}>+88 01770099768</motion.h3>
//                         </div>
//                     </div>
//                 </div>
//             </motion.div>

//         </div>
//     );
// };

// export default About;






import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCalendarAlt,
  FaArrowDown,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";
import israfil from "../../../assets/ahmisrafilcopy.png";

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const details = [
  { label: "Full name", value: "Md. Israfil Mia", icon: FaCode },
  { label: "Date of birth", value: "February 12, 1998", icon: FaCalendarAlt },
  { label: "Location", value: "Mouchak, Kaliyakoir, Gazipur", icon: FaMapMarkerAlt },
  { label: "Email", value: "ahmisrafilcse@gmail.com", icon: FaEnvelope, href: "mailto:ahmisrafilcse@gmail.com" },
  { label: "Phone", value: "+88 01770099768", icon: FaPhoneAlt, href: "tel:+8801770099768" },
];

const About = () => {
  return (
    <section id="about" className="relative isolate overflow-hidden  px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      {/* Ambient background accents */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center sm:mb-16"
        >
          <motion.p custom={0} variants={textVariants} className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-violet-200 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.9)]" />
            A little about me
          </motion.p>
          <motion.h2 custom={0.1} variants={textVariants} className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            About <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.p custom={0.2} variants={textVariants} className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Educator, computer science professional, and lifelong learner passionate about technology and meaningful learning.
          </motion.p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Profile visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/40 via-fuchsia-500/20 to-cyan-400/30 blur-xl" />
            <div className="relative rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-3 shadow-2xl shadow-violet-950/40 backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-[#17162b] via-[#151a2c] to-[#10232b]">
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080b14]/90 via-transparent to-transparent" />
                <motion.img
                  src={israfil}
                  alt="Portrait of Md. Israfil Mia"
                  loading="lazy"
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.4 }}
                  className="aspect-[4/5] w-full object-cover object-center"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-[#090d18]/75 p-4 backdrop-blur-lg sm:inset-x-5 sm:bottom-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-lg shadow-violet-950/40">
                      <FaGraduationCap size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white">Md. Israfil Mia</p>
                      <p className="mt-0.5 text-sm text-slate-300">Lecturer (ICT) · CSE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 top-8 hidden rounded-2xl border border-cyan-200/20 bg-[#101827]/90 p-3 shadow-xl shadow-cyan-950/30 backdrop-blur-md sm:block"
            >
              <FaCode className="text-cyan-200" size={21} />
            </motion.div>
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, 7, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-3 bottom-24 hidden rounded-2xl border border-fuchsia-200/20 bg-[#171127]/90 p-3 shadow-xl shadow-fuchsia-950/30 backdrop-blur-md sm:block"
            >
              <FaGraduationCap className="text-fuchsia-200" size={21} />
            </motion.div>
          </motion.div>

          {/* Bio and details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="min-w-0"
          >
            <motion.div variants={textVariants} custom={0.05} className="mb-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Who I am</p>
              <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                Making technology easier to understand—and learning more engaging.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                I work in ICT education and have a background in Computer Science and Engineering. I enjoy simplifying technical concepts, exploring software projects, and learning how technology can solve real-world problems.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {details.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-violet-200 transition-colors group-hover:border-violet-300/30 group-hover:bg-violet-300/10">
                      <Icon size={16} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-[0.14em] text-slate-500">{item.label}</span>
                      <span className="mt-1 block break-words text-sm font-semibold text-slate-100">{item.value}</span>
                    </span>
                  </>
                );

                return item.href ? (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    variants={textVariants}
                    custom={0.12 + index * 0.07}
                    whileHover={{ y: -3 }}
                    className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.035] p-4 transition-colors duration-300 hover:border-violet-300/30 hover:bg-white/[0.07] sm:col-span-1"
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.div
                    key={item.label}
                    variants={textVariants}
                    custom={0.12 + index * 0.07}
                    whileHover={{ y: -3 }}
                    className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.035] p-4 transition-colors duration-300 hover:border-violet-300/30 hover:bg-white/[0.07]"
                  >
                    {content}
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={textVariants} custom={0.55} className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="mailto:ahmisrafilcse@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/25 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 focus:ring-offset-[#080b14]"
              >
                <FaEnvelope size={14} />
                Get in touch
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/40 hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#080b14]"
              >
                Explore my journey
                <FaArrowDown size={12} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

