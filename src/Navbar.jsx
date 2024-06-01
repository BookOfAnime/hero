import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Hero Theme</div>
      <div className="navbar-links">
        <a href="#home">Hero Pepe</a>
        <a href="#about"><img className='min' src='file.png'/></a>
        <a href="#services"><img className='min' src='file.png'/></a>
        <a href="#contact"><img className='min' src='./ddd.png'></img></a>
      </div>
    </nav>
  );
};

export default Navbar;
