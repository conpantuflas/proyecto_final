import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import menu from "./image/menu.png";
const NavHoverMenu = () => {
  let [showMenuList, setShowMenuList] = useState(false);

  const handleMouseEnterMenu = (e) => {
    setShowMenuList(true);
  };
  const handleMouseLeaveMenu = (e) => {
    setShowMenuList(false);
  };

  return (
    <div
      className="hoverMenu_navbar"
      onMouseEnter={handleMouseEnterMenu}
      onMouseLeave={handleMouseLeaveMenu}
    >
      <img className="menu-img" src={menu} alt="x" />
      {showMenuList && (
        <div className="hoverMenu-list-group-container">
          <ul className="hoverMenu-list-group">
            <li className="hoverMenu-list-item">Register</li>
            <li
              className="hoverMenu-list-item"
              onClick={() => (window.location.href = `/login`)}
            >
              Log in
            </li>
            <li className="hoverMenu-list-item">Log out</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavHoverMenu;
