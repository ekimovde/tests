import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { projectActions } from "redux/actions";

import "./Navbar.scss";

const Navbar = ({ fecthProjects }) => {
  const onClick = () => {
    fecthProjects();
  };

  return (
    <div className="navbar">
      <div className="navbar__wrapper container">
        <div className="navbar__brand">
          <img src="" alt="" className="navbar__image" />
        </div>

        <ul className="navbar__menu">
          <li className="navbar__item">
            <NavLink
              activeClassName="active"
              onClick={() => onClick()}
              className="navbar__link"
              to="/"
            >
              Главная
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default connect(() => ({}), projectActions)(Navbar);
