import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../infocards/InfoCards';
import OurServices from '../our services/OurServices';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <OurServices></OurServices>
        </div>

    )
};

export default Home;