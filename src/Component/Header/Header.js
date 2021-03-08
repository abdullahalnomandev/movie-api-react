import Button from 'react-bootstrap/Button';
import React from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <div className="container">
                <Navbar.Brand as={Link} to="/">Movie</Navbar.Brand>
                <Nav className="mr-auto">
                   
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/movie">Movie</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
                </div>
            </Navbar>
       
       
            
        </>
    );
};

export default Header;