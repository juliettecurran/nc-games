import React from 'react';
import { Link } from 'react-router-dom';
import '././header.css';

const Header = () => {
  return (
    <header className='Header image-container'>
      <Link to='/'>
        <h1 className='text'>Gamerville</h1>
      </Link>
    </header>
  );
};

export default Header;
