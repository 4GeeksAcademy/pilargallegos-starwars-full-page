import React from 'react';
import { Navbar, Container, Nav , Dropdown} from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';

import { useFavorites } from '../pages/Favorites';

const NavbarComponent = () => {
    const {favorites , removeFavorite} = useFavorites();
    const navigate = useNavigate();
    return (
        <Navbar bg="dark" variant="dark"> 
            <Container className="w-75 m-auto">
                <Navbar.Brand as={Link} to="/" >Star Wars</Navbar.Brand>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="favorites-dropdown">
                        Favorites ({favorites.length})
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {favorites.length === 0 ? (
                            <Dropdown.Item>No favorites added yet</Dropdown.Item>
                        ) : (
                            favorites.map((item, index) => (
                                <Dropdown.Item key={index} onClick={()=> navigate(`/${item.type}/${item.id}`)}>
                                    {item.name}
                                    <button onClick={()=> removeFavorite(item.id)} style={{cursor: 'pointer', color: 'grey' , background: 'none' , border: 'none'}}>x</button>
                                </Dropdown.Item>
                            ))
                        )}
                    </Dropdown.Menu>
                </Dropdown>               
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/planets">Planets</Nav.Link>
                        <Nav.Link as={Link} to="/species">Species</Nav.Link>
                        <Nav.Link as={Link} to="/characters">Characters</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
