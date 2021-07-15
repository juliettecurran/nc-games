import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      className='customColour'
      variant='dark'
    >
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link href='/reviews/category/all'>Reviews</Nav.Link>
          <NavDropdown title='Categories' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='/reviews/category/dexterity'>
              Dexterity
            </NavDropdown.Item>

            <NavDropdown.Item href='/reviews/category/deck-building'>
              Deck Building
            </NavDropdown.Item>
            <NavDropdown.Item href='/reviews/category/engine-building'>
              Engine Building
            </NavDropdown.Item>

            <NavDropdown.Item href='/reviews/category/hidden-roles'>
              Hidden Roles
            </NavDropdown.Item>
            <NavDropdown.Item href='/reviews/category/strategy'>
              Strategy
            </NavDropdown.Item>

            <NavDropdown.Item href='/reviews/category/other'>
              Other
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='/reviews/category/all'>
              All
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='/new-review'>Submit Review</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
