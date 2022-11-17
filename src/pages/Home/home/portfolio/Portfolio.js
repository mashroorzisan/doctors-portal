import React from 'react';
import treatment from '../../../../assets/images/treatment.png'

const Portfolio = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-5">
                <img src={treatment} className="max-w-sm mx-auto rounded-lg shadow-2xl" />
                <div className='p-5'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary font-bold text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;