import React from 'react'
import userImage from '../profile/userImage.png'
import './profile.css'
import ModalMyPantry from '../modals/ModalMyPantry'
import { Link } from 'react-router-dom'
import Slider from '../slider/SliderMyRecipe'

const Profile = () => {
  return (
    <div>
      <div>
        <h2 className="name_profile">Pepito</h2>
        <p className="userName_profile">@user_name</p>
        <img className="userImage_profile" src={userImage} alt="x" />
      </div>
      <div>
        <ModalMyPantry />
      </div>
      <div className="divMyRecipe_profile">
        <div className="contentTitleRecipe_profile">
          <p className="titleRecipes_profile">My recipes</p>
          <Link to="/createRecipe" className="addRecipe_profile">
            add recipe +
          </Link>
        </div>
        <Slider />
      </div>
    </div>
  )
}

export default Profile
