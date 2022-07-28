import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import filter from "./image/filter.png";
import { Link } from "react-router-dom";

const NavFilters = () => {
  const [showFilterList, setShowFilterList] = useState(false);
  const { actions, store } = useContext(Context);
  const [myRecipesClick, setMyRecipesClick] = useState(false);
  const handleMouseEnterFilters = (e) => {
    setShowFilterList(true);
  };
  const handleMouseLeaveFilters = (e) => {
    setShowFilterList(false);
  };

  useEffect(() => {
    actions.handleLogin(); //Emtrega data del usuario registrado con email y mail
    // const timer = setTimeout(() => {
    //   console.log(store.loggedUserResponse["id"]); // devuelve el id del usuario logeado. Usarlo para filtrar
    // }, 3000);
    // timer();
    // actions.getRecipesByUserId(store.);
  }, []);

  return (
    <div
      type="filter-list-container"
      onMouseEnter={handleMouseEnterFilters}
      onMouseLeave={handleMouseLeaveFilters}
    >
      <img className="filter" src={filter} alt="x" /> Filters
      {showFilterList && (
        <div className="list-group list-group-filters">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              onClick={() =>
                myRecipesClick === false
                  ? setMyRecipesClick(!false)
                  : setMyRecipesClick(false)
              }
              checked={myRecipesClick}
              readOnly
            />
            {myRecipesClick === true
              ? actions.getRecipesByUserId(store.loggedUserResponse["id"])
              : actions.getRecipes()}

            <label className="form-check-label" htmlFor="flexCheckChecked">
              My Recipes
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavFilters;