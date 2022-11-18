import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png'

const AppointBanner = ({ selectDate, setSelectDate }) => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='mr-6'>
                    <DayPicker
                        mode='single'
                        selected={selectDate}
                        onSelect={setSelectDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;