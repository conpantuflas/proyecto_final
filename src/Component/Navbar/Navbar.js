import React from 'react'
import './navbar.css'
import logo from './image/chef.png'
import menu from './image/menu.png'
import save from './image/save.png'
import user from './image/user.png'
import filter from './image/filter.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="content_navbar">
      <div className="hoverMenu_navbar">
        <img className="menu" src={menu} alt="x" />
      </div>
      <Link to="/">
        <img className="logo" src={logo} alt="x" />
      </Link>
      <form>
        <input className="search" type="text" placeholder="search..." />
      </form>
      <img className="filter" src={filter} alt="x" />
      <Link to="/favoritos">
        <img className="save" src={save} alt="x" />
      </Link>
      <div className="contentUserAndUsername_navbar">
        <img className="user" src={user} alt="x" />
        <p className="userName_navbar">@user_name</p>
      </div>
    </div>
  )
}

export default Navbar
