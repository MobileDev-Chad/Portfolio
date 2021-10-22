import React, { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const cName = showNav ? "change" : "null";


  return (
    <>
      <nav className={`navbar center ${cName}`}>
        <div className="navbar-logo">
          <a href="/">Chadwin A.</a>
        </div>
        <div className="nav-list" onClick={() => setShowNav(!showNav)}>
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </nav>

      <div className={`menu ${cName}`} onClick={() => setShowNav(!showNav)}>
        <div className={`line line-1 ${cName}`}></div>
        <div className={`line line-2 ${cName}`}></div>
        <div className={`line line-3 ${cName}`}></div>
      </div>
    </>
  );
};

export default Navbar;
