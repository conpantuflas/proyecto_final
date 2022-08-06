import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Store/appContext";
import "./style/form.css";

const FormRecipe = () => {
  const params = useParams();
  const { actions, store } = useContext(Context);

  useEffect(() => {
    window.setTimeout(() => {
      actions.getIngredientsByRecipeId(params.id);
    }, 2000);
  }, []);

  return (
    <div className="contentIngredient">
      <h2>Ingredients</h2>
      <div className="contentAllIngredients">
        <div className="ingredientRecipe">
          <p className="oneIngredient"> a ingredient</p>
          <p className="measure"> 200g</p>
        </div>
        <div className="ingredientRecipe">
          <p className="oneIngredient"> a ingredient</p>
          <p className="measure"> 200g</p>
        </div>
        <div className="ingredientRecipe">
          <p className="oneIngredient"> a ingredient</p>
          <p className="measure"> 200g</p>
        </div>
        <div className="ingredientRecipe">
          <p className="oneIngredient"> a ingredient</p>
          <p className="measure"> 200g</p>
        </div>
        <div className="ingredientRecipe">
          <p className="oneIngredient"> a ingredient</p>
          <p className="measure"> 200g</p>
        </div>
      </div>
    </div>
  );
};

export default FormRecipe;
