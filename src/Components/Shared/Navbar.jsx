import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <Link to='/reviews'>
        <h4>Reviews</h4>
      </Link>
      <Link to='/categories'>
        <h4>Categories</h4>
      </Link>
      <h4>Filter</h4>
    </nav>
  );
};

export default Navbar;
