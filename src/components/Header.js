import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="overwatch 2 logo" />
      <nav className="navigation">
        <NavLink to={"/heroes"}>
          <button>Héros</button>
        </NavLink>
        <NavLink to={"/maps"}>
          <button>Modes de jeux</button>
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
