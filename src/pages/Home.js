import React from 'react';

import Presentation from '../components/Presentation';
import Title from '../components/Title';
import WhyUs from '../components/WhyUs';

const Home = () => {

    return (
        <div className='HomePage'>
            <Title/>
            <Presentation/>
            <WhyUs/>
        </div>
    );
};

export default Home;