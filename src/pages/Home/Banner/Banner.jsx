import React from 'react';
import { FaGithub, FaLinkedin, FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Typed from 'typed.js';
import {motion} from 'framer-motion'

const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-200%",
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 20,
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
        <div className='flex flex-col lg:flex-row  justify-between lg:ml-20 mb-60 items-center'>
            <div data-aos="fade-up-right">
                <div>
                    <h3 className='text-xl font-bold ml-4'>Hey I'm,</h3>
                    <h3 className='lg:text-9xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>AHM ISRAFIL</h3>
                </div>
                <div className="App lg:text-4xl font-semibold text-amber-600 flex">
                    <h3>I'm a-   </h3>
                    <span ref={el} />
                </div>
                <div className='flex flex-row gap-4 mt-6'>
                    <div>
                        <NavLink to='https://www.linkedin.com/in/ahmisrafil' target='_blank'><FaLinkedin /></NavLink>
                    </div>
                    <div>
                        <NavLink to='https://www.facebook.com/ahm.israfil' target='_blank'><FaSquareFacebook /></NavLink>
                    </div>
                    <div>
                        <NavLink to='https://www.github.com/ahmisrafil' target='_blank'><FaSquareGithub /></NavLink>
                    </div>
                </div>
            </div>
            <div>
                <img src="/src/assets/header_bg.png" alt="" className='absolute h-[500px] w-[450px] border-2 rounded-tl-[150px] rounded-br-[58px] my-4 border-amber-600' />
                <img src="/src/assets/ahm israfil.png" alt="israfil" className='relative h-[500px]  rounded-tl-[150px] rounded-br-[100px] my-4 border-amber-600' />

            </div>
        </div>
        <motion.div
                className="absolute text-[40vh] -bottom-32 whitespace-nowrap text-[#ffffff09] w-[50%] font-bold"
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