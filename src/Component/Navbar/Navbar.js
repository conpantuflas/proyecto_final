import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import logo from "./image/chef.png";
import menu from "./image/menu.png";
import save from "./image/save.png";
import user from "./image/user.png";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.js";
import NavFilters from "./NavFilters";

const Navbar = () => {
  const { actions, store } = useContext(Context);

  //store.recipes en el []
  return (
    <div className="content_navbar">
      <div className="hoverMenu_navbar">
        <img className="menu" src={menu} alt="x" />
      </div>
      <Link to="/">
        <img className="logo" src={logo} alt="x" />
      </Link>
      <SearchBar />
      <NavFilters />

      <Link to="/favoritos">
        <img className="save" src={save} alt="x" />
      </Link>
      <div className="contentUserAndUsername_navbar">
        <img className="user" src={user} alt="x" />
        <p className="userName_navbar">@user_name</p>
      </div>
    </div>
  );
};

export default Navbar;
