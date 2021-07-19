import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././navigation.css';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='customColour'>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='m-auto'>
          <Nav.Link className='navLink' href='/'>
            Home
          </Nav.Link>
          <Nav.Link className='navLink' href='/reviews/category/all'>
            Reviews
          </Nav.Link>

          <Nav.Link className='navLink' href='/new-review'>
            Submit Review
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
