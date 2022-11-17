import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/primarybutton/PrimaryButton';

const Appointment = () => {
    return (
        <section className='lg:mt-32 rounded-lg'
            style={{
                background: `url(${appointment})`
            }}>
            <div className="hero">
                <div className="hero-content p-0 flex-col lg:flex-row">
                    <img src={doctor} className="-mt-48 hidden lg:block lg:w-1/2 rounded-lg" />
                    <div className='text-white'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton></PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;