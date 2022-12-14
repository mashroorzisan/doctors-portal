import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../components/primarybutton/PrimaryButton';

const Banner = () => {
    return (
        <div className="my-5 hero drop-shadow-lg">
            <div className=" hero-content flex-col lg:flex-row-reverse ">
                <img src={chair} className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div >
    );
};

export default Banner;