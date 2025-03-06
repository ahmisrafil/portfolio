import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <>
        <li className="lg:text-white lg:text-xl lg:font-sans  lg:mx-2">
            <NavLink to='/'>Home</NavLink>
        </li>
        <li className="lg:text-white lg:text-xl lg:font-sans  lg:mx-2">
            <NavLink to='/about'>About</NavLink>
        </li>
        <li className="lg:text-white lg:text-xl lg:font-sans  lg:mx-2">
            <NavLink to='/skills'>Skills</NavLink>
        </li>
        <li className="lg:text-white lg:text-xl lg:font-sans  lg:mx-2">
            <NavLink to='https://drive.usercontent.google.com/uc?id=1_jbo6WpAYGjnDzdrmhIySRwhGqdGdgT0&export=download'>Resume</NavLink>
        </li>
        <li className="lg:text-white lg:text-xl lg:font-sans  lg:mx-2">
            <NavLink to='/'>Services</NavLink>
        </li>
        
        <li className="lg:text-white lg:text-xl lg:font-sans  lg:mx-2">
            <NavLink to='/'>Projects</NavLink>
        </li>



    </>
    return (
        <div className="navbar flex flex-col md:flex-row gap-4 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/sPvjRwg/Israfil.png" alt="" className='h-10' />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex  px-1">
                    {navLinks} 
                </ul>
            </div>
        </div>
    );
};

export default Navbar;