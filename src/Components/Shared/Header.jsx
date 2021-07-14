import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='Header image-container'>
      <Link to='/'>
        <h1 className='text'>NC-Games</h1>
      </Link>
    </header>
  );
};

export default Header;
