import React from 'react';

import Typed from 'typed.js';
const Banner = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Md. Israfil Mia.', '  a Web Developer.', 'a Frontend Developer', 'a React Developer'],
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
        <div className='flex flex-row justify-between mx-40  items-center'>
            <div>
                <div>
                    <h3 className='text-6xl font-bold'>Hi There,</h3>
                </div>
                <div className="App text-4xl text-amber-600  flex">
                    <h3>I'm -  </h3>
                    <span ref={el} />
                </div>
            </div>
            <div>
               <img src="/src/assets/header_bg.png" alt=""  className= 'absolute h-[500px] w-[450px] border-2 rounded-tl-[150px] rounded-br-[58px] my-4 border-amber-600' />
               <img src="/src/assets/ahm israfil.png" alt="israfil" className='relative h-[500px]  rounded-tl-[150px] rounded-br-[100px] my-4 border-amber-600' />

            </div>
        </div>
    );
};

export default Banner;