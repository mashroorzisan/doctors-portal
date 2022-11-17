import React from 'react';
import colon from '../../../assets/icons/quote.svg'
import avatar1 from '../../../assets/images/people1.png'
import avatar2 from '../../../assets/images/people2.png'
import avatar3 from '../../../assets/images/people3.png'
import Testimonial from './Testimonial';
const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            avatar: avatar1,
            name: "winson herry",
            place: "claifornia",
            des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        },
        {
            id: 2,
            avatar: avatar2,
            name: "winson herry",
            place: "claifornia",
            des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        },
        {
            id: 3,
            avatar: avatar3,
            name: "winson herry",
            place: "claifornia",
            des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        },
    ]
    return (
        <div>
            <div className='my-10 flex justify-between'>
                <div className='p-5'>
                    <h3 className='font-bold text-3xl text-start text-transparent bg-clip-text bg-gradient-to-t from-secondary to-primary mb-5'>Testimonial</h3>
                    <h1 className='font-semibold text-start text-4xl mb-5'>What Our Patients Says</h1>
                </div>
                <img src={colon} className='w-48' alt="" />
            </div>
            <div className='p-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(card => <Testimonial
                        key={card.id}
                        card={card}
                    ></Testimonial>)
                }
            </div>
        </div >
    );
};

export default Testimonials;