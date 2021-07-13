import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='Header'>
      <Link to='/'>
        <h4>This is a header</h4>
      </Link>
    </header>
  );
};

export default Header;
