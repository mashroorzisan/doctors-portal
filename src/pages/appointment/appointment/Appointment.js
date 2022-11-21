import React, { useState } from 'react';
import AppointBanner from '../appointbanner/AppointBanner';
import AppointBannerThree from '../appointbanner/AppointmentBannerthree';
import AppointBannerTwo from '../appointbanner/AppointmentBannerTwo';
import AvailableAppointment from '../availableappointments/AvailableAppointment';
import { DateRange, DayPicker } from 'react-day-picker';
import { addDays } from 'date-fns';


const Appointment = () => {
    const pastMonth = new Date();
    const defaultSelected = {
        from: pastMonth,
        to: addDays(pastMonth, 2)
    };


    const [range, setRange] = useState(defaultSelected)
    const [selectDate, setSelectDate] = useState(new Date());
    const initailDays = [];
    const [days, setDays] = useState(initailDays);

    return (
        <div>
            <AppointBanner
                selectDate={selectDate}
                setSelectDate={setSelectDate}
            ></AppointBanner>
            <AppointBannerTwo
                days={days}
                setDays={setDays}
            ></AppointBannerTwo>
            <AppointBannerThree
                pastMonth={pastMonth}
                range={range}
                setRange={setRange}
            >
            </AppointBannerThree>
            <AvailableAppointment
                selectDate={selectDate}
                days={days}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;