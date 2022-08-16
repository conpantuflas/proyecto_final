import React, { useContext } from 'react'
import { Context } from '../../Store/appContext'
import './style/userRecipe.css'
import person from './image/person.jpg'

const UserRecipe = () => {
  const { store } = useContext(Context)

  return (
    <div className="firstContent_userRecipe">
      <div>
        <img className="image_UserRecipe" src={person} alt="x" />
      </div>
      <div>
        <p className="name_UserRecipe">{store.loggedUserResponse2.name}</p>
        <p className="userName_UserRecipe">
          {store.loggedUserResponse2.userName}
        </p>
      </div>
    </div>
  )
}

export default UserRecipe
