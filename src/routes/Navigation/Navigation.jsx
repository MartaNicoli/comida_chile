//import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
//import { NavLink} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from 'react-router-dom';



const Navigation = () => {
    return (
        <div>
            <>
            <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
                <Navbar.Brand as={NavLink} to='/comida_chile'>Comida Típica Chilena</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link as={NavLink} to='/locales'>Locales</Nav.Link>
                        <Nav.Link as={NavLink} to='/menu'>Menu</Nav.Link>
                        <Nav.Link as={NavLink} to='/reservas'>Reservas</Nav.Link>
                        <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
                        <Nav.Link as={NavLink} to='/AcercaDe'>AcercaDe</Nav.Link>
                        {/*<Nav.Link href='/'>Login</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </>


            {/*<NavLink to='/locales'>Locales</NavLink>
            <NavLink to='/menu'>Menu</NavLink>
            <NavLink to='/reservas'>Reservas</NavLink>
            <NavLink to='/delivery'>Delivery</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/'>Login</NavLink>
            <Outlet />*/}
            
        </div>
    )
}

export default Navigation