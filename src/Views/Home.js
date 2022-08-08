import ModalMyPantry from '../Component/modals/ModalMyPantry'
import ModalSessionStart from '../Component/modals/ModalSessionStart'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-subcontainer-1">
        <ModalSessionStart />
        <ModalMyPantry />
      </div>
      <div className="home-subcontainer-2 d-flex justify-content-center">
        <ul className="list-group list-group-flush border border-5 rounded rounded-5">
          <li className="list-group-item ">
            <FontAwesomeIcon
              icon={faUserPlus}
              className="font-awesome-icon-home fa-xl"
            />
            <p>
              {' '}
              <b>Register</b> and access the app features
            </p>
          </li>
          <li className="list-group-item">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="font-awesome-icon-home fa-xl"
            />{' '}
            <p>
              <b>Search</b> from other users recipes and try them! You can
              filter by <b>ingredient</b>
            </p>
          </li>
          <li className="list-group-item ">
            <FontAwesomeIcon
              icon={faUpload}
              className="font-awesome-icon-home fa-xl"
            />{' '}
            <p>
              Post your own recipes and <b>share</b> them with the community
            </p>
          </li>
          <li className="list-group-item ">
            <FontAwesomeIcon
              icon={faComment}
              className="font-awesome-icon-home fa-xl"
            />
            <p>Comment and rate other users recipes!</p>
          </li>
        </ul>
      </div>
      <div className="home-subcontainer-3"></div>
    </div>
  )
}

export default Home
