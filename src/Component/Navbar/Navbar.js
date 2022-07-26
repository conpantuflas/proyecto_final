import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import logo from "./image/chef.png";
import menu from "./image/menu.png";
import save from "./image/save.png";
import user from "./image/user.png";
import filter from "./image/filter.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.js";

const Navbar = () => {
  const { actions, store } = useContext(Context);
  const [showFilterList, setShowFilterList] = useState(false);

  useEffect(() => {
    actions.getRecipes();
    console.log(store.recipes);
  }, []);

  const handleMouseEnterFilters = (e) => {
    setShowFilterList(true);
  };
  const handleMouseLeaveFilters = (e) => {
    setShowFilterList(false);
  };

  return (
    <div className="content_navbar">
      <div className="hoverMenu_navbar">
        <img className="menu" src={menu} alt="x" />
      </div>
      <Link to="/">
        <img className="logo" src={logo} alt="x" />
      </Link>

      <SearchBar />
      <div //Lista de filtros
        type="filter-list-container"
        onMouseEnter={handleMouseEnterFilters}
        onMouseLeave={handleMouseLeaveFilters}
      >
        <img className="filter" src={filter} alt="x" /> Filters
        {showFilterList && (
          <div className="list-group list-group-filters">
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-dark"
            >
              My Recipes
            </a>
          </div>
        )}
      </div>

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
