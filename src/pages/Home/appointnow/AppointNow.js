import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/primarybutton/PrimaryButton';
import { Link } from 'react-router-dom';

const AppointNow = () => {
    return (
        <section className='lg:mt-32 rounded-lg lg:p-0  p-10 mx-auto'
            style={{
                background: `url(${appointment})`
            }}>
            <div className="hero">
                <div className="hero-content p-0 flex-col lg:flex-row">
                    <img src={doctor} className="-mt-48 hidden lg:block lg:w-1/2 rounded-lg" />
                    <div className='text-white'>
                        <h1 className="text-5xl font-bold">Appoint Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton><Link to='/appointment'>Appoint Now</Link></PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointNow;