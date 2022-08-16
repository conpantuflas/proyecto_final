import React, { useContext } from 'react'
import { Context } from '../../Store/appContext'
import './style/steps.css'
import imagenProvisoria from './image/lasaña.jpg'

const Steps = () => {
  const { store } = useContext(Context)

  return (
    <div>
      <p className="preparationsFirstTitle_steps">Preparations steps</p>
      {store.step.length
        ? store.step.map((stepp, i) => (
            <div key={i} className="oneStep">
              <img className="image_steps" src={imagenProvisoria} alt="x" />
              <div className="divText_step">
                <p className="description_step">{stepp.step} </p>
              </div>
            </div>
          ))
        : console.log(store.step)}
    </div>
  )
}

export default Steps
