import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ children }) => {
    return (
        <Link to='/login' className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">{children}</Link>
    );
};

export default PrimaryButton;