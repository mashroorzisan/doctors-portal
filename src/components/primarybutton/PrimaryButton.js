import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">{children}</button>
    );
};

export default PrimaryButton;