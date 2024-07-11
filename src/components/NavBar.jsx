import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";


export const NavBar = () =>
(<>

    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">Growshop 4:20</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#">Semillas</Nav.Link>
                <Nav.Link href="#">Productos</Nav.Link>
                <Nav.Link href="#prcing">Contacto</Nav.Link>
            </Nav>
                <CartWidget />
        </Container>
    </Navbar>
    <hr />


</>
)