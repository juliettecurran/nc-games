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

          <NavDropdown
            className='navLink'
            title='Categories'
            id='collasible-nav-dropdown'
          >
            <NavDropdown.Item
              className='navLink'
              href='/reviews/category/dexterity'
            >
              Dexterity
            </NavDropdown.Item>

            <NavDropdown.Item
              className='navLink'
              href='/reviews/category/deck-building'
            >
              Deck Building
            </NavDropdown.Item>
            <NavDropdown.Item
              className='navLink'
              href='/reviews/category/engine-building'
            >
              Engine Building
            </NavDropdown.Item>

            <NavDropdown.Item
              className='navLink'
              href='/reviews/category/hidden-roles'
            >
              Hidden Roles
            </NavDropdown.Item>
            <NavDropdown.Item
              className='navLink'
              href='/reviews/category/strategy'
            >
              Strategy
            </NavDropdown.Item>

            <NavDropdown.Item
              className='navLink'
              href='/reviews/category/other'
            >
              Other
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className='navLink' href='/reviews/category/all'>
              All
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className='navLink' href='/new-review'>
            Submit Review
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
