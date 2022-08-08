import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../Store/appContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.css'

let SearchBar = () => {
  const { store } = useContext(Context)
  const [showSearchList, setShowSearchList] = useState(false)
  const [searchVal, setSearchVal] = useState('')

  const handleSearchInput = (e) => {
    const searchedWord = e.target.value
    setSearchVal(searchedWord)
  }

  const handleMouseEnterFilters = (e) => {
    if (searchVal !== null || searchVal !== '') {
      setShowSearchList(true)
    } else {
      setShowSearchList(false)
    }
  }
  const handleMouseLeaveFilters = (e) => {
    setShowSearchList(false)
  }

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
            {store.ingredients_all &&
              store.ingredients_all.map((ingredient, key) => {
                return (
                  ingredient.ingredient_name
                    .toLowerCase()
                    .includes(searchVal) && (
                    <a
                      className="search-item"
                      key={key}
                      onClick={() =>
                        window.setTimeout(() => {
                          window.location.href = `/viewrecipe/${ingredient.id_recipe}`
                        }, 2000)
                      } /*en vez del numero uno, poner el id*/
                    >
                      <p>{ingredient.recipe_name}</p>
                    </a>
                  )
                )
              })}
          </div>
        )}
      </form>
    </div>
  )
}

export default SearchBar
