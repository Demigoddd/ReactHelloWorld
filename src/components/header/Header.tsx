import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';

const Header: React.FC = () => {
  return (
    <header>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/counter"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Counter
      </NavLink>
      <NavLink
        to="/lazy-loading"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Lazy Loading
      </NavLink>
      <NavLink
        to="/modal"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Modal
      </NavLink>
      <NavLink
        to="/quiz"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Quiz
      </NavLink>
      <NavLink
        to="/user-list"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        User List
      </NavLink>
      <NavLink
        to="/value-converter"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Value Converter
      </NavLink>
      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Gallery
      </NavLink>
      <NavLink
        to="/slider-game"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Slider Game
      </NavLink>
    </header>
  );
};

export default Header;
