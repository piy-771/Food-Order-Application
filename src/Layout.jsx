import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logoffood.webp';
import { Link, Outlet } from 'react-router-dom';

const Layout=()=>{
    return(
        <>
             <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand >
                    <img src={logo} alt="" />
          </Navbar.Brand>
          <Nav className="justify-content-start">
            <Nav.Link as={Link} to="home" >HOME</Nav.Link> 
            <Nav.Link as={Link} to="menu" >MENU</Nav.Link> 
            <Nav.Link as={Link} to="order">ORDER</Nav.Link>  
            <Nav.Link as={Link} to="yourorder">YOUR ORDERS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
        
        </>
    )
}

export default Layout;