import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            des: 'Open 9.00 am to 5.00 pm everyday',
            icon: clock,
            bgClass: 'primary',
            to: 'secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            des: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgClass: 'accent',
            to: 'primary'
        },
        {
            id: 3,
            name: 'Opening Hours',
            des: 'Open 9.00 am to 5.00 pm everyday',
            icon: clock,
            bgClass: 'primary',
            to: 'secondary'

        },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-6  '>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;