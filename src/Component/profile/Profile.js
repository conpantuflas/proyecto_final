import React, { useContext, useEffect } from 'react'
import { Context } from '../../Store/appContext'
import userImage from '../profile/userImage.png'
import './profile.css'
import ModalMyPantry from '../modals/ModalMyPantry'
import { Link } from 'react-router-dom'
import Slider from '../slider/SliderMyRecipe'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const { store } = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    if (store.tokenLogin.token === '') {
      navigate(-1)
    }
  }, [])

  return (
    <div>
      <div>
        <h2 className="name_profile">{store.loggedUserResponse2.name}</h2>
        <p className="userName_profile">
          @{store.loggedUserResponse2.userName}
        </p>
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
