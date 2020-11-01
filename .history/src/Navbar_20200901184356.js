import React, { Component } from "react";
import { NavbarLink } from "react-router-dom";

class Chips extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavbarLink exact activeClassName="Navbar-active" to="/">
          Home
        </NavbarLink>
        <NavbarLink exact activeClassName="Navbar-active" to="/chips">
          Chips
        </NavbarLink>
        <NavbarLink exact activeClassName="Navbar-active" to="/soda">
          Soda
        </NavbarLink>
        <NavbarLink exact activeClassName="Navbar-active" to="/sardines">
          Sardines
        </NavbarLink>
      </div>
    );
  }
}

export default Chips;
