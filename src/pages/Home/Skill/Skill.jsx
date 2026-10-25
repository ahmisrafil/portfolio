// import React from 'react';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../../../variants';
// const Skill = () => {
    
//     return (
//         <div>
//             <div className="w-full">
//                 <div className="inner">
//                     <div>
//                         <motion.h1 
//                         variants={fadeIn('right', 0.5)}
//                         initial="hidden"
//                         whileInView="show" 
//                         viewport={{ once: false, amount: 0.3 }}
//                          className="text-4xl text-center sm:text-5xl lg:text-6xl font-bold bg-gradient-to-l from-cyan-800 via-pink-200 to-red-800 bg-clip-text text-transparent mb-8 mx-4">
//                             My Skills 
//                         </motion.h1>
//                     </div>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  text-lg mx-4 sm:mx-10 lg:mx-36">
//                         {/* Skill 1: HTML 5 */}
//                         <motion.div
//                         variants={fadeIn('down', 0.5)}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: false, amount: 0.3 }}
//                          className="p-4 text-white">
//                             <div className="flex flex-col items-center p-2 mb-2 relative">
//                                 <div className="img">
//                                     <img
//                                         className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-5"
//                                         src="https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png"
//                                         alt=""
//                                     />
//                                 </div>
//                                 <h2 className="text-lg sm:text-xl lg:text-2xl tracking-wider font-semibold font-tertiary text-gradient">
//                                     HTML 5
//                                 </h2>
//                             </div>
//                             <p className="w-full sm:w-80 lg:w-96">
//                                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.
//                             </p>
//                         </motion.div>

//                         {/* Skill 2: CSS 3 */}
//                         <motion.div 
//                         variants={fadeIn('down', 0.5)}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: false, amount: 0.3 }}
//                         className="p-4 text-white">
//                             <div className="flex flex-col items-center p-2 mb-2 relative">
//                                 <div className="img">
//                                     <img
//                                         className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-5"
//                                         src="https://diziglobalsolution.com/wp-content/uploads/2023/04/logo-css-3-1536.png"
//                                         alt=""
//                                     />
//                                 </div>
//                                 <h2 className="text-lg sm:text-xl lg:text-2xl tracking-wider font-semibold font-tertiary text-gradient">
//                                     CSS 3
//                                 </h2>
//                             </div>
//                             <p className="w-full sm:w-80 lg:w-96">
//                                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.
//                             </p>
//                         </motion.div>

//                         {/* Skill 3: JavaScript */}
//                         <motion.div
//                         variants={fadeIn('down', 0.5)}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: false, amount: 0.3 }}
//                          className="p-4 text-white">
//                             <div className="flex flex-col items-center p-2 mb-2 relative">
//                                 <div className="img">
//                                     <img
//                                         className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-5"
//                                         src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
//                                         alt=""
//                                     />
//                                 </div>
//                                 <h2 className="text-lg sm:text-xl lg:text-2xl tracking-wider font-semibold font-tertiary text-gradient">
//                                     JavaScript
//                                 </h2>
//                             </div>
//                             <p className="w-full sm:w-80 lg:w-96">
//                                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.
//                             </p>
//                         </motion.div>

//                         {/* Skill 4: React Js */}
//                         <motion.div
//                         variants={fadeIn('left', 0.5)}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: false, amount: 0.3 }}
//                          className="p-4 text-white">
//                             <div className="flex flex-col items-center p-2 mb-2 relative">
//                                 <div className="img">
//                                     <img
//                                         className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-5"
//                                         src="https://nextsoftware.io/files/images/logos/main/reactjs-logo.png"
//                                         alt=""
//                                     />
//                                 </div>
//                                 <h2 className="text-lg sm:text-xl lg:text-2xl tracking-wider font-semibold font-tertiary text-gradient">
//                                     React Js
//                                 </h2>
//                             </div>
//                             <p className="w-full sm:w-80 lg:w-96">
//                                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.
//                             </p>
//                         </motion.div>

//                         {/* Skill 5: Node Js */}
//                         <motion.div
//                         variants={fadeIn('left', 0.5)}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: false, amount: 0.3 }}
//                          className="p-4 text-white">
//                             <div className="flex flex-col items-center p-2 mb-2 relative">
//                                 <div className="img">
//                                     <img
//                                         className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-5"
//                                         src="https://i.ibb.co/vdZM28D/png-transparent-js-logo-node-logos-and-brands-icon-removebg-preview.png"
//                                         alt=""
//                                     />
//                                 </div>
//                                 <h2 className="text-lg sm:text-xl lg:text-2xl tracking-wider font-semibold font-tertiary text-gradient">
//                                     Node Js
//                                 </h2>
//                             </div>
//                             <p className="w-full sm:w-80 lg:w-96">
//                                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.
//                             </p>
//                         </motion.div>

//                         {/* Skill 6: MongoDB */}
//                         <motion.div
//                         variants={fadeIn('left', 0.5)}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: false, amount: 0.3 }}
//                          className="p-4 text-white">
//                             <div className="flex flex-col items-center p-2 mb-2 relative">
//                                 <div className="img">
//                                     <img
//                                         className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-5"
//                                         src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
//                                         alt=""
//                                     />
//                                 </div>
//                                 <h2 className="text-lg sm:text-xl lg:text-2xl tracking-wider font-semibold font-tertiary text-gradient">
//                                     MongoDB
//                                 </h2>
//                             </div>
//                             <p className="w-full sm:w-80 lg:w-96">
//                                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.
//                             </p>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default Skill;




import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaReact,
  FaGraduationCap,
  FaBrain,
  FaTools,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiCplusplus,
  SiPython,
  SiGit,
  SiGithub,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    category: "Frontend",
    level: "Strong foundation",
    description: "Building semantic, accessible page structures for responsive websites.",
    icon: SiHtml5,
    color: "text-orange-400",
    glow: "from-orange-500/20",
    tags: ["Semantic HTML", "Forms", "Accessibility"],
  },
  {
    name: "CSS3",
    category: "Frontend",
    level: "Strong foundation",
    description: "Styling responsive interfaces with layouts, transitions, and reusable patterns.",
    icon: SiCss3,
    color: "text-sky-400",
    glow: "from-sky-500/20",
    tags: ["Flexbox", "Grid", "Responsive UI"],
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Working knowledge",
    description: "Adding interactive behavior and dynamic functionality to web applications.",
    icon: SiJavascript,
    color: "text-yellow-300",
    glow: "from-yellow-400/20",
    tags: ["ES6+", "DOM", "Async basics"],
  },
  {
    name: "React",
    category: "Frontend",
    level: "Project experience",
    description: "Creating component-based interfaces and interactive portfolio experiences.",
    icon: SiReact,
    color: "text-cyan-300",
    glow: "from-cyan-500/20",
    tags: ["Components", "Hooks", "Framer Motion"],
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Learning & building",
    description: "Exploring server-side JavaScript and the foundations of backend development.",
    icon: SiNodedotjs,
    color: "text-green-400",
    glow: "from-green-500/20",
    tags: ["JavaScript", "APIs", "Backend basics"],
  },
  {
    name: "MongoDB",
    category: "Database",
    level: "Learning & building",
    description: "Working with document-oriented data and the basics of database-backed apps.",
    icon: SiMongodb,
    color: "text-emerald-400",
    glow: "from-emerald-500/20",
    tags: ["Documents", "Collections", "CRUD basics"],
  },
  {
    name: "C++",
    category: "Programming",
    level: "Academic & problem solving",
    description: "Using programming fundamentals and data structures to solve computational problems.",
    icon: SiCplusplus,
    color: "text-blue-300",
    glow: "from-blue-500/20",
    tags: ["OOP", "Data structures", "Algorithms"],
  },
  {
    name: "Python",
    category: "Programming & AI",
    level: "Academic & research use",
    description: "Applying Python to programming tasks and machine-learning research workflows.",
    icon: SiPython,
    color: "text-yellow-200",
    glow: "from-yellow-500/20",
    tags: ["Scripting", "Data handling", "ML foundations"],
  },
  {
    name: "Deep Learning",
    category: "Research",
    level: "Research experience",
    description: "Exploring neural networks for EEG-based emotion-classification research.",
    icon: FaBrain,
    color: "text-fuchsia-300",
    glow: "from-fuchsia-500/20",
    tags: ["Neural networks", "LSTM", "EEG classification"],
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    level: "Development workflow",
    description: "Managing source code and project versions during web development.",
    icon: SiGit,
    color: "text-orange-300",
    glow: "from-orange-500/20",
    tags: ["Version control", "Repositories", "Collaboration"],
  },
  {
    name: "Tailwind CSS",
    category: "UI Styling",
    level: "Project experience",
    description: "Building consistent, responsive interfaces using utility-first styling.",
    icon: SiTailwindcss,
    color: "text-cyan-200",
    glow: "from-cyan-500/20",
    tags: ["Utility classes", "Responsive design", "UI patterns"],
  },
];

const categories = [
  { title: "Frontend", icon: FaLaptopCode, text: "Interfaces & user experience" },
  { title: "Programming", icon: FaCode, text: "Core concepts & problem solving" },
  { title: "Backend & Data", icon: FaDatabase, text: "Server and database foundations" },
  { title: "Research & Teaching", icon: FaGraduationCap, text: "ICT education and neural networks" },
];

const Skill = () => {
  return (
    <section id="skills" className="relative isolate overflow-hidden  px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.9)]" />
            Skills & expertise
          </span>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            My <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A mix of web development, programming fundamentals, research, and technology-focused teaching—built through projects, academic work, and continuous learning.
          </p>
        </motion.div>

        <div className="mb-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/[0.09] bg-white/[0.035] p-4 backdrop-blur-md sm:p-5"
              >
                <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl border border-violet-300/20 bg-violet-300/[0.08] text-violet-200">
                  <Icon size={18} />
                </span>
                <h3 className="text-sm font-bold text-white sm:text-base">{category.title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">{category.text}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0d1220]/80 p-5 shadow-xl shadow-black/10 backdrop-blur-xl transition-colors duration-300 hover:border-violet-300/30 sm:p-6"
              >
                <div aria-hidden="true" className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${skill.glow} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.045] text-3xl transition-transform duration-300 group-hover:scale-105">
                        <Icon className={skill.color} />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{skill.category}</p>
                        <h3 className="mt-1 text-xl font-bold text-white">{skill.name}</h3>
                      </div>
                    </div>
                    <FaTools className="mt-1 text-slate-700 transition-colors group-hover:text-violet-300" />
                  </div>

                  <p className="mt-5 min-h-[4.5rem] text-sm leading-6 text-slate-400">{skill.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/[0.08] pt-4">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      {skill.level}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-violet-300/15 bg-gradient-to-r from-violet-500/[0.09] via-white/[0.025] to-cyan-400/[0.07] p-6 text-center sm:p-8"
        >
          <p className="text-lg font-bold text-white sm:text-xl">Always learning. Always building.</p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            I keep strengthening my development skills while exploring deep learning and creating practical, student-friendly learning experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
