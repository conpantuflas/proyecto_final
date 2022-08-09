import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../Store/appContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.css'
import logo from './image/chef.png'
import save from './image/save.png'
import user from './image/user.png'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import NavFilters from './NavFilters'
import NavHoverMenu from './Navbar_HoverMenu'

const Navbar = () => {
  const { actions, store } = useContext(Context)

  //store.recipes en el []
  return (
    <div className="content_navbar">
      <NavHoverMenu />
      <Link to="/" onClick={() => (window.location.href = '/')}>
        <img className="logo" src={logo} alt="x" />
      </Link>
      <SearchBar />
      {/* <NavFilters /> */}
      <Link to="/favoritos">
        <img className="save" src={save} alt="x" />
      </Link>
      <Link to="/profile" className="contentUserAndUsername_navbar">
        <img className="user" src={user} alt="x" />
        {/* <p className="userName_navbar">{store.loggedUserResponse.user_name}</p> */}
      </Link>

      <div>
        <p className="userName_navbar">
          {store.loggedUserResponse.user_name !== ''
            ? store.loggedUserResponse.user_name
            : 'No user logged'}
        </p>
      </div>
    </div>
  )
}

export default Navbar
