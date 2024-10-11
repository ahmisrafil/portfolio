import { motion } from 'framer-motion'
import React from 'react';


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



const About = () => {
    return (
        <div >
            {/* <motion.div className='lg:mx-20 my-20 flex flex-col lg:flex-row lg:gap-36 justify-center text-white'
                variants={textVariants}
                initial="initial"
                animate="animate">
                <div>
                    <motion.img variants={textVariants} src="/src/assets/ahmisrafilcopy.png" className='h-[400px] rounded-full border-2 bg-gradient-to-bl from-[#161d21] via-purple-600 to-pink-400' alt="md_israfil" />
                </div>
                <div>
                    <motion.h3 variants={textVariants}  className='text-6xl font-semibold bg-gradient-to-l from-gray-400 via-pink-600 to-red-500 bg-clip-text text-transparent mb-8 mx-4'>ABOUT ME</motion.h3>
                    <div className='flex flex-col  lg:gap-2 mx-4 lg:text-2xl'>
                        <div className='flex flex-row gap-24'>
                            <motion.h3 variants={textVariants} className='font-semibold'>Name :</motion.h3> <motion.h3 variants={textVariants}>Md. Israfil Mia</motion.h3>
                        </div>
                        <div className='flex flex-row gap-6'>
                            <motion.h3 variants={textVariants} className='font-semibold'>Date-of-Birth :</motion.h3> <motion.h3 variants={textVariants}>February 12, 1998</motion.h3>
                        </div>
                        <div className='flex flex-row gap-[74px]'>
                            <motion.h3 variants={textVariants} className='font-semibold'>Address :</motion.h3> <motion.h3 variants={textVariants}>Khilkhet, Dhaka</motion.h3>
                        </div>
                        <div className='flex flex-row gap-[98px]'>
                            <motion.h3 variants={textVariants} className='font-semibold'>Email :</motion.h3> <motion.h3 variants={textVariants}>ahmisrafilcse@gmail.com</motion.h3>
                        </div>
                        <div className='flex flex-row gap-[91px] '>
                            <motion.h3 variants={textVariants} className='font-semibold'>Phone :</motion.h3> <motion.h3 variants={textVariants}>+88 01770099768</motion.h3>
                        </div>

                    </div>
                </div>
            </motion.div> */}
            <motion.div className='lg:mx-20 my-20 flex flex-col lg:flex-row lg:gap-36 justify-center text-white px-4 sm:px-6'
                variants={textVariants}
                initial="initial"
                animate="animate">
                <div className='flex justify-center lg:justify-start'>
                    <motion.img
                        variants={textVariants}
                        src="https://i.ibb.co.com/NS4Hfw1/ahmisrafilcopy.png"
                        className='h-[200px] sm:h-[300px] lg:h-[400px] rounded-full border-2 bg-gradient-to-bl from-[#161d21] via-purple-600 to-pink-400'
                        alt="md_israfil" />
                </div>
                <div className='mt-8 lg:mt-0 text-center'>
                    <motion.h3 variants={textVariants} className='text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-l from-gray-400 via-pink-600 to-red-500 bg-clip-text text-transparent mb-8 mx-4'>
                        ABOUT ME
                    </motion.h3>
                    <div className='flex flex-col lg:gap-2 mx-4 lg:text-2xl text-base sm:text-lg'>
                        <div className='flex flex-row gap-12 sm:gap-24'>
                            <motion.h3 variants={textVariants} className='font-semibold'>Name :</motion.h3>
                            <motion.h3 variants={textVariants}>Md. Israfil Mia</motion.h3>
                        </div>
                        <div className='flex flex-row gap-4 sm:gap-6'>
                            <motion.h3 variants={textVariants} className='font-semibold'>Date of Birth :</motion.h3>
                            <motion.h3 variants={textVariants}>February 12, 1998</motion.h3>
                        </div>
                        <div className='flex flex-row gap-[40px] sm:gap-[74px]'>
                            <motion.h3 variants={textVariants} className='font-semibold'>Address :</motion.h3>
                            <motion.h3 variants={textVariants}>Khilkhet, Dhaka</motion.h3>
                        </div>
                        <div className='flex flex-row gap-[50px] sm:gap-[98px]'>
                            <motion.h3 variants={textVariants} className='font-semibold'>Email :</motion.h3>
                            <motion.h3 variants={textVariants}>ahmisrafilcse@gmail.com</motion.h3>
                        </div>
                        <div className='flex flex-row gap-[45px] sm:gap-[91px]'>
                            <motion.h3 variants={textVariants} className='font-semibold'>Phone :</motion.h3>
                            <motion.h3 variants={textVariants}>+88 01770099768</motion.h3>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default About;