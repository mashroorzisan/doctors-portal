import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png'

const AppointBannerTwo = ({ days, setDays }) => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className='text-5xl'>Banner-2 <br />(MultipleDates)</h1>
                </div>
                <div className='mr-6'>
                    <DayPicker
                        mode='multiple'
                        min={1}
                        selected={days}
                        onSelect={setDays}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointBannerTwo;