import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import OurService from './OurService';


const ourServices = () => {
    const dataCards = [
        {
            id: 1,
            figure: fluoride,
            head: "Fluoride Treatment",
            body: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            figure: cavity,
            head: "Cavity Filling",
            body: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            figure: whitening,
            head: "Teeth Whitening",
            body: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
    ]
    return (
        <section>
            <div className='flex flex-col items-center my-20 '>
                <h3 className='font-bold text-center text-3xl text-transparent bg-clip-text bg-gradient-to-b from-secondary to-primary mb-5'>Our Services</h3>
                <h1 className='font-bold text-center text-4xl mb-5'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    dataCards.map(card => <OurService
                        key={card.id}
                        card={card}></OurService>)
                }
            </div>
        </section >
    );
};

export default ourServices;