import React from 'react';
import Appointment from '../appointment/Appointment';
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
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <FormSubmit></FormSubmit>
        </div>

    )
};

export default Home;