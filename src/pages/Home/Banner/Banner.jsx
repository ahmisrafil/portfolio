import React from 'react';
import { FaGithub, FaLinkedin, FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Typed from 'typed.js';
import { motion } from 'framer-motion'

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-200%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};
const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};




const Banner = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [' TEACHER',' WEB DEVELOPER', 'FRONTEND DEVELOPER', 'UI/UX DESIGNER', 'REACT DEVELOPER'],
            typeSpeed: 150,
            loop: true,
            // fadeOut: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
            // typed.reset;
        };
    }, []);
    return (
        <>
            <div className='flex flex-col lg:flex-row justify-between lg:ml-20 mb-40 items-center px-4 sm:px-6'>
                <motion.div
                    variants={textVariants}
                    initial="initial"
                    animate="animate">
                    <div>
                        <motion.h3 variants={textVariants} className='text-lg text-gray-100 sm:text-xl font-bold ml-2 sm:ml-4'>Hey I'm,</motion.h3>
                        <motion.h3
                            variants={textVariants}
                            className='text-4xl sm:text-6xl lg:text-9xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                            AHM ISRAFIL
                        </motion.h3>
                    </div>
                    <div className="App absolute lg:relative lg:text-4xl font-semibold text-amber-600 flex gap-2 items-center">
                        <motion.h3 variants={textVariants} className="text-base sm:text-lg">I'm a-   </motion.h3>
                        <span ref={el} />
                    </div>
                    <div className='flex flex-row gap-4 mt-6'>
                        <motion.div variants={textVariants}>
                            <NavLink to='https://www.linkedin.com/in/ahmisrafil' target='_blank'>
                                <FaLinkedin className='text-white' size={30} />
                            </NavLink>
                        </motion.div>
                        <motion.div variants={textVariants}>
                            <NavLink to='https://www.facebook.com/ahm.israfil' target='_blank'>
                                <FaSquareFacebook className='text-white' size={30} />
                            </NavLink>
                        </motion.div>
                        <motion.div variants={textVariants}>
                            <NavLink to='https://www.github.com/ahmisrafil' target='_blank'>
                                <FaSquareGithub className='text-white' size={30} />
                            </NavLink>
                        </motion.div>
                    </div>
                </motion.div>
                <div className='relative pt-10 lg:mt-0 lg:mr-20'>
                    
                    <div className="h-[300px] sm:h-[400px] lg:h-[500px] w-[300px] sm:w-[350px] lg:w-[450px] bg-no-repeat bg-center bg-cover border-3 border-[#b936ee] order-1 self-center animate-profile__animate"
                        style={{
                            backgroundImage: "url('https://i.ibb.co.com/NYKt6gx/ahmisrafil.jpg')",
                            boxShadow: "inset 0 0 0 9px rgba(255, 255, 255, 0.3)",
                            border: "2px red",
                            animation: "profile__animate 8s ease-in-out infinite 1s",
                        }}>

                    </div>
                </div>
            </div>
            <motion.div
                className="hidden lg:inline absolute text-[20vh] sm:text-[30vh] lg:text-[40vh] -bottom-32 whitespace-nowrap text-[#ffffff09] w-[50%] font-bold"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                AHM ISRAFIL
            </motion.div>






        </>
    );
};

export default Banner;