import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {CountryName}=useParams();
    const [coutnry,setcountry]=useState([])
    useEffect(()=>{
        axios(`https://restcountries.eu/rest/v2/name/${CountryName}`)
        .then(data=>setcountry(data.data[0]))
    },[])
    const {name,capital,population}=coutnry;
    return (
        <div>
            <h1>Name:{name}</h1>
            <p>City:{capital}</p>
            <p>Population:{population}</p>
            <p></p>
        </div>
    );
};

export default CountryDetail;