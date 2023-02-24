import React from 'react';
import Earth from '../images/fill.png';

const Navbar = () => {
  return (
    <div className='nav'>
        <img src = {Earth} />
        <p>my travel journal.</p>
    </div>
  );
};

export default Navbar;