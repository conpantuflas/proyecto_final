import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

let SearchBar = () => {
  const { actions, store } = useContext(Context);
  const [showSearchList, setShowSearchList] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  //window.location.href = `/characters/${props.id}`;

  useEffect(() => {
    actions.getRecipes();
  }, []);

  const handleSearchInput = (e) => {
    const searchedWord = e.target.value;
    setSearchVal(searchedWord);
  };

  const handleMouseEnterFilters = (e) => {
    setShowSearchList(true);
  };
  const handleMouseLeaveFilters = (e) => {
    setShowSearchList(false);
  };
  return (
    <div className="search-container">
      <form>
        <input
          className="search"
          type="text"
          placeholder="Search by recipe name or ingredient..."
          onChange={handleSearchInput}
          onMouseEnter={handleMouseEnterFilters}
          onMouseLeave={handleMouseLeaveFilters}
          onClick={handleMouseEnterFilters}
        />

        {showSearchList && (
          <div
            className="search-results"
            onMouseEnter={handleMouseEnterFilters}
            onMouseLeave={handleMouseLeaveFilters}
          >
            {store.recipes &&
              store.recipes.map((recipe, key) => {
                return (
                  recipe.name_recipe.toLowerCase().includes(searchVal) && (
                    <a
                      className="search-item"
                      key={recipe.id}
                      onClick={() =>
                        window.setTimeout(() => {
                          window.location.href = `/viewrecipe/${recipe.id}`;
                        }, 2000)
                      } /*en vez del numero uno, poner el id*/
                    >
                      <p>{recipe.name_recipe}</p>
                    </a>
                  )
                );
              })}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
