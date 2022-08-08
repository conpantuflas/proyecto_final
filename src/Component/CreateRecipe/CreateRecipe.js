import React, { useState, useContext } from "react";
import { Context } from "../../Store/appContext";
import "./createRecipe.css";
import time from "../ViewRecipe/image/time.png";
import portions from "../ViewRecipe/image/portions.png";
import Navbar from "../Navbar/Navbar";

const CreateRecipe = () => {
  const { actions } = useContext(Context);

  //state ingredient
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientPortion, setIngredientPortion] = useState("");

  const handleSubmitIngredient = (e) => {
    e.preventDefault();
    actions.handleSubmitCreateIngredient(ingredientName, ingredientPortion);
  };

  return (
    <>
      <Navbar />
      <form>
        <h2 className="title_createRecipe"> Create Recipe</h2>
        <input
          className="nameOfRecipe_createRecipe"
          type="text"
          placeholder="write the name of recipe"
        />

        <div className="contentImageAndIngredient_createRecipe">
          <div className="contentAddImage_createRecipe">
            <p className="textAddImage_createRecipe">add image +</p>
            <input type="file" className="inputFile_createRecipe" />
          </div>

          <div className="contentIngredient_craeteRecipe">
            <h2 className="titleIngredients_craeteRecipe">Ingredients</h2>

            <div className="contentOneIngredients_craeteRecipe">
              <input
                className="oneIngredient_craeteRecipe"
                type="text"
                placeholder="a ingredient"
                onChange={(e) => {
                  setIngredientName(e.target.value);
                }}
              />
              <input
                className="portion_craeteRecipe"
                type="text"
                placeholder="portion"
                onChange={(e) => {
                  setIngredientPortion(e.target.value);
                }}
              />
            </div>

            <button
              className="buttonMore_craeteRecipe"
              onClick={(e) => handleSubmitIngredient(e)}
            >
              more ingredient +
            </button>
          </div>
        </div>

        <p className="titleOfSection_createRecipe">Time and Portions</p>
        <div className="contentIconAndImput_craeteRecipe">
          <div>
            <img className="icon_craeteRecipe" src={time} alt="x" />
            <input
              className="inputTimeAndPortion_craeteRecipe"
              type="text"
              placeholder="time of cooking"
            />
          </div>

          <div>
            <img className="icon_craeteRecipe" src={portions} alt="x" />
            <input
              className="inputTimeAndPortion_craeteRecipe"
              type="text"
              placeholder="portions"
            />
          </div>
        </div>

        <p className="titleOfSection_createRecipe">Steps of recipe</p>
        <div className="stepContent_createRecipe">
          <div className="contentAddImageStep_createRecipe">
            <p className="textAddImage_createRecipe">add image +</p>
            <input type="file" className="inputFile_createRecipe" />
          </div>
          <div>
            <p>Step 1</p>
            <textarea
              type="text"
              className="setpDescription_createRecipe"
              placeholder="write you step in here"
            />
          </div>
        </div>
        <div className="contentFinalButton_createRecipe">
          <button className="addStepButton_createRecipe">add step +</button>
          <button className="createRecipeButton_createRecipe">
            Create Recipe
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateRecipe;
