import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';


const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <>
            <Navbar bg="" className="nav-cont" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home" className="fs-3 fw-bold">Venue Reservation System</Navbar.Brand>



                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className="text-white fs-5 fw-bold">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#venues" className="text-white fs-5 fw-bold">Venues</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#pricing" className="text-white fs-5 fw-bold">Pricing</Nav.Link>
                        {user?.email ?
                             <Button onClick={logOut} variant="light" >Logout</Button>:
                            <Nav.Link as={Link} to="/login" className="text-white fs-5 fw-bold">Log In</Nav.Link>}
                        <Navbar.Text className="text-white fs-5 fw-bold">
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;