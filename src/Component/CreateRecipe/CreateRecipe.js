import React, { useState, useContext } from 'react'
import { Context } from '../../Store/appContext'
import './createRecipe.css'
import timeImage from '../ViewRecipe/image/time.png'
import portions from '../ViewRecipe/image/portions.png'
import Ingredient from '../modals/Ingredient'
import Step from './Step'

const objectDataRequireIngredient = {
  ingredientName: '',
  ingredientPortion: '',
  ingredientMeasure: '',
}

const objectDataRequireStep = {
  step: '',
}

const CreateRecipe = () => {
  const { actions } = useContext(Context)

  //states
  const [nameRecipe, setNameRecipe] = useState('')
  const [time, setTime] = useState('')
  const [portion, setPortion] = useState('')

  const [ingredients, setIngredients] = useState([objectDataRequireIngredient])
  const [step, setStep] = useState([objectDataRequireStep])

  const handleOnChange = (index, name, value) => {
    const copyIngredients = [...ingredients]
    copyIngredients[index] = {
      ...copyIngredients[index],
      [name]: value,
    }
    setIngredients(copyIngredients)
  }

  const handleOnChangeStep = (index, name, value) => {
    const copyStep = [...step]
    copyStep[index] = {
      ...copyStep[index],
      [name]: value,
    }
    setStep(copyStep)
  }

  const handleOnAdd = (e) => {
    e.preventDefault()
    setIngredients(ingredients.concat(objectDataRequireIngredient))
  }

  const handleOnAddStep = (e) => {
    e.preventDefault()
    setStep(step.concat(objectDataRequireStep))
  }

  const handleOnRemove = (index) => {
    const copyIngredients = [...ingredients]
    copyIngredients.splice(index, 1)
    setIngredients(copyIngredients)
  }

  const handleOnRemoveStep = (index) => {
    const copyStep = [...step]
    copyStep.splice(index, 1)
    setStep(copyStep)
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    await actions.handleSubmitCreateRecipe(nameRecipe, time, portion)
    ingredients.map((ingred) =>
      actions.handleSubmitCreateIngredientRecipe(ingred)
    )
    step.map((step) => actions.handleSubmitCreateStep(step.step))
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <h2 className="title_createRecipe"> Create Recipe</h2>

        {/* name recipe */}
        <input
          className="nameOfRecipe_createRecipe"
          type="text"
          placeholder="write the name of recipe"
          onChange={(e) => setNameRecipe(e.target.value)}
        />

        {/* image */}
        <div className="contentImageAndIngredient_createRecipe">
          <div className="contentAddImage_createRecipe">
            <p className="textAddImage_createRecipe">add image +</p>
            <input type="file" className="inputFile_createRecipe" />
          </div>

          {/* crete ingredient */}
          <div className="contentIngredient_craeteRecipe">
            <h2 className="titleIngredients_craeteRecipe">Ingredients</h2>
            <div className="contentOneIngredients_craeteRecipe">
              {ingredients.map((ingred, index) => (
                <Ingredient
                  {...ingred}
                  onChange={(name, value) => handleOnChange(index, name, value)}
                  onRemove={() => handleOnRemove(index)}
                  key={index}
                />
              ))}
            </div>
            <button
              className="addStepButton_createRecipe"
              onClick={(e) => handleOnAdd(e)}
            >
              Add Ingredient
            </button>
          </div>
        </div>

        {/* time and portion  */}
        <p className="titleOfSection_createRecipe">Time and Portions</p>
        <div className="contentIconAndImput_craeteRecipe">
          <div>
            <img className="icon_craeteRecipe" src={timeImage} alt="x" />

            {/* time time time */}
            <input
              className="inputTimeAndPortion_craeteRecipe"
              type="text"
              placeholder="time of cooking"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div>
            <img className="icon_craeteRecipe" src={portions} alt="x" />

            {/* portion portion portion */}
            <input
              className="inputTimeAndPortion_craeteRecipe"
              type="text"
              placeholder="portions"
              onChange={(e) => setPortion(e.target.value)}
            />
          </div>
        </div>

        {/* step step step */}
        <p className="titleOfSection_createRecipe">Steps of recipe</p>
        <div className="stepContent_createRecipe">
          {/* <div className="contentAddImageStep_createRecipe">
            <p className="textAddImage_createRecipe">add image +</p>
            <input type="file" className="inputFile_createRecipe" />
          </div> */}
          <div>
            <p>Step 1</p>

            <div className="contentStep">
              {step.map((stepp, index) => (
                <Step
                  {...stepp}
                  onChange={(name, value) =>
                    handleOnChangeStep(index, name, value)
                  }
                  onRemove={() => handleOnRemoveStep(index)}
                  key={index}
                />
              ))}
            </div>
            <button
              className="addStepButton_createRecipe"
              onClick={(e) => handleOnAddStep(e)}
            >
              Add Ingredient
            </button>
          </div>
        </div>

        <div className="contentFinalButton_createRecipe">
          <button
            className="createRecipeButton_createRecipe"
            onClick={(e) => {
              handleOnSubmit(e)
            }}
          >
            Create Recipe
          </button>
        </div>
      </form>
    </>
  )
}

export default CreateRecipe
