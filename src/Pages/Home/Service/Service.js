import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({service}) => {
    const {id,name,price,description,img} = service;

    return (
        <div className="service pb-3">
            <img src={img} alt=""></img>
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}>
            <button type="button" class="btn btn-warning">Primary</button>
            </Link>

        </div>
    );
};

export default Service;