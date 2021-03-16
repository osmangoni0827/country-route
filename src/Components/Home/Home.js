import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css';
const Home = () => {
    const [country,setcountry]=useState([]);
    useEffect(()=>{
        const url='https://restcountries.eu/rest/v2/all';
        axios(url)
        .then(data=>setcountry(data.data))
    },[])
    return (
        <div className='homestyle'>
            {
                country.map(country=><Country details={country} key={country.name}></Country>)
            }
        </div>
    );
};

export default Home;