import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.jpg';
const NotFound = () => {
    return (
        <div>
            <img style={{width:'100%', height:'550px'}} src={notFound} alt=""/>
            <Link to='/home'>
            <Button variant="outline-success">Go Back</Button>{' '}

            </Link>
        </div>
    );
};

export default NotFound;