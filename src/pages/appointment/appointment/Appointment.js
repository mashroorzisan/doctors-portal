import React, { useState } from 'react';
import AppointBanner from '../appointbanner/AppointBanner';
import AvailableAppointment from '../availableappointments/AvailableAppointment';

const Appointment = () => {
    const [selectDate, setSelectDate] = useState(new Date());

    return (
        <div>
            <AppointBanner
                selectDate={selectDate}
                setSelectDate={setSelectDate}
            ></AppointBanner>
            <AvailableAppointment
                selectDate={selectDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;