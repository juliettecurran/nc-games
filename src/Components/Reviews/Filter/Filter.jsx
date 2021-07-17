import React from 'react';
import Expandable from '../../Shared/Expandable/Expandable';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Filter = () => {
  return (
    <div>
      <Expandable>
        <Navbar expand='lg' className='customColour'>
          <Nav className='m-auto'>
            <NavDropdown
              className='navLink'
              title='Category'
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
              <NavDropdown.Item
                className='navLink'
                href='/reviews/category/all'
              >
                All
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className='navLink'
              title='Sort By'
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item
                className='navLink'
                href='/reviews/category/dexterity'
              >
                Most Recent
              </NavDropdown.Item>

              <NavDropdown.Item
                className='navLink'
                href='/reviews/category/deck-building'
              >
                Most Comments
              </NavDropdown.Item>
              <NavDropdown.Item
                className='navLink'
                href='/reviews/category/engine-building'
              >
                Most Votes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </Expandable>
    </div>
  );
};

export default Filter;
