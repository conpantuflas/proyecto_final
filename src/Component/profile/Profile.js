import React from 'react'
import userImage from '../Navbar/image/user.png'
import './profile.css'

const Profile = () => {
  return (
    <div>
      <div>
        <h2>Pepito</h2>
        <p>@user_name</p>
        <img src={userImage} alt="x" />
      </div>
      <div>
        <button>My Pantry</button>
      </div>
      <div>
        <p>My recipes</p>
      </div>
    </div>
  )
}

export default Profile
