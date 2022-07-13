import React from 'react';
import './style/form.css'

const FormRecipe = () => {
   
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
}

export default FormRecipe;
