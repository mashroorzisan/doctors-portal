import React from 'react';
import { format } from 'date-fns'

const TreatmentBtn = ({ treatment, selectDate }) => {
    const { name, slots } = treatment;
    const date = format(selectDate, 'PP');
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.tel.value;
        const email = form.email.value;
        const slot = form.slot.value;
        console.log(name, email, phone, slot)
    }

    return (
        <>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-10'>
                        <input disabled type="text" value={date} className='input  w-full input-bordered' />
                        <select name='slot' className='select select-bordered w-full'>
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder='Full Name' className='input  w-full input-bordered' />
                        <input name='tel' type="tel" placeholder='Phone' className='input  w-full input-bordered' />
                        <input name='email' type="email" placeholder='Email' className='input  w-full input-bordered' />
                        <input className='btn btn-accent w-full' type="submit" value='submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default TreatmentBtn;