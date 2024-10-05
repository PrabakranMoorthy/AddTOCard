import React from 'react';

const Navbar = ( {inputValue, toggleModal }) => {
  return (
    <nav className="navbar">
      <h1>Shopping Cards</h1>
      <button onClick={toggleModal}>Card({inputValue})</button>
    </nav>
  );
};

export default Navbar;