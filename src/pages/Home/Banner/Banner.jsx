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
            strings: [' WEB DEVELOPER', 'FRONTEND DEVELOPER', 'UI/UX DESIGNER', 'REACT DEVELOPER'],
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
                        <motion.h3 variants={textVariants} className='text-lg sm:text-xl font-bold ml-2 sm:ml-4'>Hey I'm,</motion.h3>
                        <motion.h3
                            variants={textVariants}
                            className='text-4xl sm:text-6xl lg:text-9xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                            AHM ISRAFIL
                        </motion.h3>
                    </div>
                    <div className="App absolute lg:relative lg:text-4xl font-semibold text-amber-600 flex">
                        <motion.h3 variants={textVariants} className="text-base sm:text-lg">I'm a-   </motion.h3>
                        <span ref={el} />
                    </div>
                    <div className='flex flex-row gap-4 mt-6'>
                        <motion.div variants={textVariants}>
                            <NavLink to='https://www.linkedin.com/in/ahmisrafil' target='_blank'>
                                <FaLinkedin size={30} />
                            </NavLink>
                        </motion.div>
                        <motion.div variants={textVariants}>
                            <NavLink to='https://www.facebook.com/ahm.israfil' target='_blank'>
                                <FaSquareFacebook size={30} />
                            </NavLink>
                        </motion.div>
                        <motion.div variants={textVariants}>
                            <NavLink to='https://www.github.com/ahmisrafil' target='_blank'>
                                <FaSquareGithub size={30} />
                            </NavLink>
                        </motion.div>
                    </div>
                </motion.div>
                <div className='relative pt-10 lg:mt-0'>
                    <motion.img
                        variants={textVariants}
                        animate="animate"
                        src="/src/assets/header_bg.png"
                        alt=""
                        className='absolute h-[300px] sm:h-[400px] lg:h-[500px] w-[300px] sm:w-[350px] lg:w-[450px] border-2 rounded-tl-[100px] sm:rounded-tl-[150px] rounded-br-[50px] sm:rounded-br-[58px] border-amber-600'
                    />
                    <motion.img
                        variants={textVariants}
                        src="/src/assets/ahm_israfil.png"
                        alt="israfil"
                        className='relative h-[300px] sm:h-[400px] lg:h-[500px] w-[300px] sm:w-[350px] lg:w-[450px] rounded-tl-[100px] sm:rounded-tl-[150px] rounded-br-[50px] sm:rounded-br-[100px]s border-amber-600'
                    />
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