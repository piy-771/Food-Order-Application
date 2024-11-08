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
      <footer>
      <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Event Planner. All rights reserved.
      </p>
    </footer>
      </footer>
        
        </>
    )
}


const styles = {
  footer: {
    backgroundColor: '#000', // Black background
    color: '#fff', // White text
    padding: '10px 20px',
    textAlign: 'center',
    marginTop:"50px",
    
    left: '0',
    bottom: '0',
    width: '100%',
  },
  text: {
    margin: 0,
  },
};

export default Layout;