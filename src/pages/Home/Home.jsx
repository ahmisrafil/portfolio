import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Skill from './Skill/Skill';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Services></Services>
        </div>
    );
};

export default Home;