import React from 'react';

const Skill = () => {
    return (
        <div>
            <div className="w-full">
                <div className="inner">
                    <div className="headers">
                        <h1 className="text-3xl text-center sm:text-5xl lg:text-6xl font-bold bg-gradient-to-l from-cyan-800 via-pink-200 to-red-800 bg-clip-text text-transparent mb-8 mx-4">
                            My Skills
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6 sm:p-10 lg:p-20 text-lg mx-4 sm:mx-10 lg:mx-36">
                        {/* Skill 1: HTML 5 */}
                        <div className="p-4 text-white">
                            <div className="flex flex-col items-center p-2 mb-2 relative">
                                <div className="img">
                                    <img
                                        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-5"
                                        src="https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png"
                                        alt=""
                                    />
                                </div>
                                <h2 className="text-lg sm:text-xl lg:text-2xl tracking-wider font-semibold font-tertiary text-gradient">
                                    HTML 5
                                </h2>
                            </div>
                            <p className="w-full sm:w-80 lg:w-96">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.
                            </p>
                        </div>

                        {/* Skill 2: CSS 3 */}
                        <div className="p-4 text-white">
                            <div className="flex flex-col items-center p-2 mb-2 relative">
                                <div className="img">
                                    <img
                                        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-5"
                                        src="https://diziglobalsolution.com/wp-content/uploads/2023/04/logo-css-3-1536.png"
                                        alt=""
                                    />
                                </div>
                                <h2 className="text-lg sm:text-xl lg:text-2xl tracking-wider font-semibold font-tertiary text-gradient">
                                    CSS 3
                                </h2>
                            </div>
                            <p className="w-full sm:w-80 lg:w-96">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.
                            </p>
                        </div>

                        {/* Skill 3: JavaScript */}
                        <div className="p-4 text-white">
                            <div className="flex flex-col items-center p-2 mb-2 relative">
                                <div className="img">
                                    <img
                                        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-5"
                                        src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                                        alt=""
                                    />
                                </div>
                                <h2 className="text-lg sm:text-xl lg:text-2xl tracking-wider font-semibold font-tertiary text-gradient">
                                    JavaScript
                                </h2>
                            </div>
                            <p className="w-full sm:w-80 lg:w-96">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.
                            </p>
                        </div>

                        {/* Skill 4: React Js */}
                        <div className="p-4 text-white">
                            <div className="flex flex-col items-center p-2 mb-2 relative">
                                <div className="img">
                                    <img
                                        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-5"
                                        src="https://nextsoftware.io/files/images/logos/main/reactjs-logo.png"
                                        alt=""
                                    />
                                </div>
                                <h2 className="text-lg sm:text-xl lg:text-2xl tracking-wider font-semibold font-tertiary text-gradient">
                                    React Js
                                </h2>
                            </div>
                            <p className="w-full sm:w-80 lg:w-96">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.
                            </p>
                        </div>

                        {/* Skill 5: Node Js */}
                        <div className="p-4 text-white">
                            <div className="flex flex-col items-center p-2 mb-2 relative">
                                <div className="img">
                                    <img
                                        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-5"
                                        src="https://i.ibb.co/vdZM28D/png-transparent-js-logo-node-logos-and-brands-icon-removebg-preview.png"
                                        alt=""
                                    />
                                </div>
                                <h2 className="text-lg sm:text-xl lg:text-2xl tracking-wider font-semibold font-tertiary text-gradient">
                                    Node Js
                                </h2>
                            </div>
                            <p className="w-full sm:w-80 lg:w-96">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.
                            </p>
                        </div>

                        {/* Skill 6: MongoDB */}
                        <div className="p-4 text-white">
                            <div className="flex flex-col items-center p-2 mb-2 relative">
                                <div className="img">
                                    <img
                                        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-5"
                                        src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
                                        alt=""
                                    />
                                </div>
                                <h2 className="text-lg sm:text-xl lg:text-2xl tracking-wider font-semibold font-tertiary text-gradient">
                                    MongoDB
                                </h2>
                            </div>
                            <p className="w-full sm:w-80 lg:w-96">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Skill;