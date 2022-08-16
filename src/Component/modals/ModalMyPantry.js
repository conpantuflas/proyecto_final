import React, { useState, useContext } from 'react'
import { Context } from './../../Store/appContext'
import { Modal, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Ingredient from './Ingredient'

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: '600px',
    background: '#fff',
    border: '1px solid #828282',
    borderRadius: '12px',
    boxShadow: theme.shadows[5],
    padding: '16px 32px 24px',
    top: '20%',
    left: '27%',
    transform: 'transalte(-50%, -50%)',
  },
  buttonOpenPantry: {
    margin: '0.2rem',
    color: '#000',
    textTransform: 'lowerCase',
    padding: '0.5rem 2.3rem',
    fontSize: '1.1rem',
    background: '#43d400',
    borderRadius: '15px',
  },
  closePantry: {
    background: 'none',
    border: 'none',
    marginLeft: '33rem',
  },
  buttonAddToPantry: {
    marginLeft: '12rem',
    marginTop: '1rem',
    border: 'none',
    background: '#46a600',
    color: '#fff',
    fontWeight: 600,
    padding: '0.3rem 2.5rem',
    borderRadius: '16px',
  },
  contentIngredient: {
    maxHeight: '12rem',
    width: '100%',
    overflowY: 'scroll',
  },
  addButton: {
    border: 'none',
    background: 'none',
    color: 'rgb(0, 102, 255)',
    fontWeight: 300,
    paddingTop: '2rem',
    marginLeft: '13.3rem',
  },
  paragraph: {
    color: '#828282',
    fontSize: '0.8rem',
    marginLeft: '11rem',
    marginTop: '1rem',
  },
}))

const ModalMyPantry = () => {
  const styles = useStyles()

  const { actions } = useContext(Context)

  const objectDataRequire = {
    ingredientName: '',
    ingredientPortion: '',
    ingredientMeasure: '',
  }

  //state
  const [modal, setModal] = useState(false)
  const [ingredients, setIngredients] = useState([objectDataRequire])

  const handleOnChange = (index, name, value) => {
    const copyIngredients = [...ingredients]
    copyIngredients[index] = {
      ...copyIngredients[index],
      [name]: value,
    }
    setIngredients(copyIngredients)
  }

  const handleOnAdd = (e) => {
    e.preventDefault()
    setIngredients(ingredients.concat(objectDataRequire))
  }

  const handleOnRemove = (index) => {
    const copyIngredients = [...ingredients]
    copyIngredients.splice(index, 1)
    setIngredients(copyIngredients)
  }

  const abrirCerrarModal = () => {
    setModal(!modal)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    ingredients.map((ingred, index) =>
      actions.handleSubmitCreateIngredient(ingred)
    )
  }

  const body = (
    <div className={styles.modal}>
      <button className={styles.closePantry} onClick={() => abrirCerrarModal()}>
        x
      </button>
      <div aling="center">
        <h2>My pantry</h2>
      </div>
      <div className={styles.contentIngredient}>
        {ingredients.map((ingred, index) => (
          <Ingredient
            {...ingred}
            onChange={(name, value) => handleOnChange(index, name, value)}
            onRemove={() => handleOnRemove(index)}
            key={index}
          />
        ))}
      </div>
      <button className={styles.addButton} onClick={(e) => handleOnAdd(e)}>
        Add Ingredient
      </button>
      <button
        className={styles.buttonAddToPantry}
        onClick={(e) => handleOnSubmit(e)}
      >
        Add Pantry
      </button>
      <p className={styles.paragraph}>Can config MyPantry in your profile</p>
    </div>
  )

  return (
    <div>
      <Button
        className={styles.buttonOpenPantry}
        onClick={() => abrirCerrarModal()}
      >
        My Pantry
      </Button>
      <Modal open={modal} onClose={abrirCerrarModal}>
        {body}
      </Modal>
    </div>
  )
}

export default ModalMyPantry
