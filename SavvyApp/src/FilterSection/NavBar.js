import React from "react";
import ".//NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a className="nav-bar--default"> View All </a>
        </li>
        <li>
          <a className="nav-bar--selected"> Travel </a>
        </li>
        <li>
          <a className="nav-bar--selected"> Education </a>
        </li>
        <li>
          <a className="nav-bar--selected">Electronics</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
