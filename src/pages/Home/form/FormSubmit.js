import React from 'react';
import image from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/primarybutton/PrimaryButton';

const FormSubmit = () => {
    return (
        <section className='lg:mt-32 lg:p-0  p-10'
            style={{
                background: `url(${image})`,
                backgroundSize: 'cover'
            }}>

            <div className=" p-10  flex justify-center">
                <div className="">
                    <h3 className='font-bold text-center text-2xl text-transparent bg-clip-text bg-gradient-to-b from-secondary to-primary mb-5'>Contact Us</h3>
                    <h1 className='font-bold text-center text-white text-3xl mb-5'>Stay connected with us</h1>
                    <form className='flex-col'>
                        <div className="my-3">
                            <input type="text" placeholder="Email Address" className="rounded-xl p-2 w-60 lg:w-96" />
                        </div>
                        <div className="my-3">
                            <input type="text" placeholder="Subject" className="rounded-xl p-2 w-60 lg:w-96" />
                        </div>
                        <div className="my-3">
                            <textarea type="text" placeholder='Your message' className='rounded-xl h-28 p-2 w-60 lg:w-96'></textarea>
                        </div>
                        <div className="my-3  flex justify-center">
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </form>
                </div >
            </div >

        </section >
    );
};

export default FormSubmit;