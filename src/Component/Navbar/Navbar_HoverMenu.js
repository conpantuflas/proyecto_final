import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import menu from "./image/menu.png";
const NavHoverMenu = () => {
  let [showMenuList, setShowMenuList] = useState(false);
  const { actions, store } = useContext(Context);

  const handleMouseEnterMenu = (e) => {
    setShowMenuList(true);
  };
  const handleMouseLeaveMenu = (e) => {
    setShowMenuList(false);
  };

  let handleLogin = (e) => {
    actions.handleLogin();
    actions.handleLoginToken();
    window.setTimeout(() => {
      console.log(store.loggedUserResponse);
      console.log(store.active_token);
    }, 2000);
  };

  let handleLogout = (e) => {
    actions.handleLogout();
    console.log(store.loggedUserResponse);
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
            <li className="hoverMenu-list-item" onClick={(e) => handleLogin(e)}>
              Log in
            </li>
            <li
              className="hoverMenu-list-item"
              onClick={(e) => handleLogout(e)}
            >
              Log out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavHoverMenu;
