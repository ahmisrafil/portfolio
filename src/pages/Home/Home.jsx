import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Skill from './Skill/Skill';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            {/* <Services></Services> */}
            {/* <Contact></Contact> */}
            <Experience></Experience>
        </div>
    );
};

export default Home;