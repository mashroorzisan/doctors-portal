import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png'

const AppointBannerThree = ({ range, pastMonth, setRange }) => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className='text-5xl'>Banner-3 <br />(RangeDates)</h1>
                </div>
                <div className='mr-6'>
                    <DayPicker
                        mode='range'
                        defaultMonth={pastMonth}
                        selected={range}
                        onSelect={setRange}

                    />
                </div>
            </div>
        </div>
    );
};

export default AppointBannerThree;