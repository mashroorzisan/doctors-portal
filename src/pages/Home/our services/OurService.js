import React from 'react';

const OurService = ({ card }) => {
    const { head, body, figure } = card;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto p-10">
            <figure>
                <img src={figure} alt={head} />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-semibold text-center">{head}</h2>
                <p className='text-center'>{body}</p>
            </div>
        </div>
    );
};

export default OurService;