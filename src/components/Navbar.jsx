import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/playa">Playa</NavLink></li>
        <li><NavLink to="/desierto">Desierto</NavLink></li>
        <li><NavLink to="/bosque">Bosque</NavLink></li>
        <li><NavLink to="/montaña">Montaña</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;