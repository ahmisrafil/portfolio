import { motion } from 'framer-motion'
import React from 'react';


const About = () => {
    return (
        <div className='lg:mx-20 mt-20 flex flex-col lg:flex-row lg:gap-36 justify-center text-white'>
            <div>
                <img src="/src/assets/ahmisrafilcopy.png" className='h-[400px] rounded-full border-2 bg-gradient-to-bl from-[#161d21] via-purple-600 to-pink-400' alt="md_israfil" />
            </div>
            <div>
                <h3 className='text-6xl font-semibold bg-gradient-to-l from-gray-400 via-pink-600 to-red-500 bg-clip-text text-transparent mb-8 mx-4'>ABOUT ME</h3>
                <div className='flex flex-col  lg:gap-2 mx-4 lg:text-2xl'>
                    <div className='flex flex-row gap-24'>
                        <h3 className='font-semibold'>Name :</h3> <h3>Md. Israfil Mia</h3>
                    </div>
                    <div className='flex flex-row gap-6'>
                        <h3 className='font-semibold'>Date-of-Birth :</h3> <h3>February 12, 1998</h3>
                    </div>
                    <div className='flex flex-row gap-[74px]'>
                        <h3 className='font-semibold'>Address :</h3> <h3>Khilkhet, Dhaka</h3>
                    </div>
                    <div className='flex flex-row gap-[98px]'>
                        <h3 className='font-semibold'>Email :</h3> <h3>ahmisrafilcse@gmail.com</h3>
                    </div>
                    <div className='flex flex-row gap-[91px] '>
                        <h3 className='font-semibold'>Phone :</h3> <h3>+88 01770099768</h3>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default About;