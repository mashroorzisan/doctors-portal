import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = () => {
    return (
        <Link to='/login' className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</Link>
    );
};

export default PrimaryButton;