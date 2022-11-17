import React from 'react';

const Testimonial = ({ card }) => {
    const { name, place, des, avatar } = card;
    return (
        <div className="card w-96 bg-base-100 shadow-xl p-5 mx-auto">
            <div className="card-body">
                <p className=''>{des}</p>
            </div>
            <div className='flex items-center'>
                <img className='mx-5' src={avatar} alt="" />
                <div>
                    <h4 className='font-semibold'>{name}</h4>
                    <p>{place}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;