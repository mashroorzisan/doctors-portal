import React from 'react';

const InfoCard = ({ card }) => {
    const { name, des, bgClass, icon, to } = card;

    return (
        <div className={`card w-96  lg:flex-row  bg-gradient-to-r from-${bgClass} to-${to} shadow-xl text-white p-10 my-10 mx-auto`}>
            <figure>
                <img src={icon} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{des}</p>
            </div>
        </div>
    );
};

export default InfoCard;