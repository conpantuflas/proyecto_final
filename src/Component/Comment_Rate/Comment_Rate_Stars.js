import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaStar } from 'react-icons/fa'
import { Context } from '../../Store/appContext'
import './Comment_Rate.css'

const CommentRateStars = () => {
  const { store } = useContext(Context)

  return (
    <>
      <div>
        {[...Array(store.comments[1])].map((star, i) => {
          return <FaStar key={i} className="totalRatingStars" />
        })}
      </div>
    </>
  )
}

export default CommentRateStars
