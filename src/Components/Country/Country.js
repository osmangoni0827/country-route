import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';
const Country = (profs) => {
    const {flag,name}=profs.details;
    
    return (
        <div className='countrystyle'>
            <img src={flag} alt=''></img>
            <h1>{name}</h1>
            <Link to={`/${name}`}>
            <button>Details for {name}</button>
            </Link>
           
        </div>
    );
};

export default Country;