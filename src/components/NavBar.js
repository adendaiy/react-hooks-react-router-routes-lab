// NavBar.js

import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar"> {/* Ensure className matches ".navbar" */}
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/movies" activeClassName="active">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/directors" activeClassName="active">
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/actors" activeClassName="active">
            Actors
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
