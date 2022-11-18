import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'
import AvailableOptions from '../availableOptions/AvailableOptions';
import TreatmentBtn from '../../../components/booktreatment/TreatmentBtn';

const AvailableAppointment = ({ selectDate }) => {
    const [availableAppointments, setAvailableAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('optionsData.json')
            .then(res => res.json())
            .then(data => setAvailableAppointments(data))
    }, [])
    return (
        <section>
            <p className='text-center text-secondary font-bold'>You have selected: {format(selectDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    availableAppointments.map(t => <AvailableOptions
                        key={t._id}
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
        </section>
    );
};

export default AvailableAppointment;