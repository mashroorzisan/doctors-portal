import React from 'react';
import AppointNow from '../appointnow/AppointNow';
import Banner from '../Banner/Banner';
import FormSubmit from '../form/FormSubmit';
import InfoCards from '../infocards/InfoCards'
import OurServices from '../our services/OurServices';
import Portfolio from '../portfolio/Portfolio';
import Testimonials from '../testimonials/Testimonials';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <OurServices></OurServices>
            <Portfolio></Portfolio>
            <AppointNow></AppointNow>
            <Testimonials></Testimonials>
            <FormSubmit></FormSubmit>
        </div>

    )
};

export default Home;