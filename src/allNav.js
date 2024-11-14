import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./images/logo.webp";
import Nav from 'react-bootstrap/Nav';

export function NavHome(){
    return(
    <Navbar bg="light" variant="light" customNavbar={{height:'10px'}}>
    <Container>
      <Navbar.Brand href="#home">
      <img
          alt=""
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
          style={{ position: 'absolute', left: '250px',bottom: '10px'}}
        />
        
      </Navbar.Brand>
      <Navbar.Brand style={{ fontSize: '30px',position: 'absolute', left: '300px',bottom: '0px' }}>Tienda Esperanza Animal</Navbar.Brand>
      <Nav className="ms-auto">
      <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/registrar">Registrarse</Nav.Link>
        <Nav.Link href="/admin/login">Administración</Nav.Link>         
      </Nav>
    </Container>
  </Navbar>
    )
}
export function NavNegro() {
    return (
      <>
        <Navbar variant="dark" style={{ backgroundColor: '#28a745' }} >
          <Container>
            <Navbar.Brand href="/">

              Fundación Esperanza Animal
            </Navbar.Brand>
          </Container>
        </Navbar>    
      </>
  
    );
  }