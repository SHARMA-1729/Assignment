import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbarr() {
  return (
    <>
      
    
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Employee Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Status">Employee_List</Nav.Link>
            <Nav.Link href="/Online">Present_Employee</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default Navbarr;