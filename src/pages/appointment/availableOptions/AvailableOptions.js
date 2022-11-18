import React from 'react';

const AvailableOptions = ({ options, setTreatment }) => {
    const { name, slots } = options;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <h2 className="text-primary font-bold text-2xl text-center">{name}</h2>
                <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(options)}
                        htmlFor="book-modal"
                        className="btn bg-gradient-to-r from-primary to-secondary text-white border-0"
                    >open modal</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableOptions;