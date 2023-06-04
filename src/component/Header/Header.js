import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar className='nav-main'>
                <Container>
                    <Navbar.Brand as={Link} to="/">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <NavLink to='/home'>Home</NavLink>
                            <NavLink to='/shop'>Shop</NavLink>
                            <NavLink to='/login'>Login</NavLink>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;