import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'
import AvailableOptions from '../availableOptions/AvailableOptions';
import TreatmentBtn from '../../../components/booktreatment/TreatmentBtn';

const AvailableAppointment = ({ selectDate, days }) => {
    const [availableAppointments, setAvailableAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('optionsData.json')
            .then(res => res.json())
            .then(data => setAvailableAppointments(data))
    }, [])
    return (
        <section>
            <p className='text-center text-secondary font-bold'>You have selected: {format(selectDate, 'PP')}-banner-1</p>
            {
                days && days.length > 0 ? < p className='text-center text-secondary font-bold'>You have selected: {days.length} day(s)-banner-2</p>
                    :
                    <p>Please pick one or more days</p>
            }
            <p className='text-center text-secondary font-bold'>You have selected: {format(selectDate, 'PP')}-banner-3</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    availableAppointments.map((t, i) => <AvailableOptions
                        key={i}
                        options={t}
                        setTreatment={setTreatment}></AvailableOptions>
                    )
                }
            </div>
            {
                treatment &&
                <TreatmentBtn
                    treatment={treatment}
                    selectDate={selectDate}>
                </TreatmentBtn>
            }
        </section >
    );
};

export default AvailableAppointment;