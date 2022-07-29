import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Store/appContext";
import ButtonPantryDiscount from "../Component/ViewRecipe/ButtonPantryDiscount";
import TimeRecipe from "../Component/ViewRecipe/TimeRecipe";
import FormRecipe from "../Component/ViewRecipe/FormRecipe";
import SliderRecipe from "../Component/ViewRecipe/SliderRecipe";
import UserRecipe from "../Component/ViewRecipe/UserRecipe";
import Portions from "../Component/ViewRecipe/Portions";
// import Valuation from "../Component/ViewRecipe/Valuation";
import Steps from "../Component/ViewRecipe/Steps";
import { Link } from "react-router-dom";
import CommentRateStars from "../Component/Comment_Rate/Comment_Rate_Stars";

const ViewRecipe = () => {
  const params = useParams();
  const { actions, store } = useContext(Context);
  const [recipeName, setRecipeName] = useState("");

  useEffect(() => {
    window.setTimeout(() => {
      actions.getCommentsByRecipeId(params.id);
      const filteredById = store.recipes.filter((frecipe) => {
        return frecipe.id == params.id;
      });

      setRecipeName(filteredById[0].name_recipe);
      console.log(params.id, filteredById[0].name_recipe);
    }, 2000);
  }, []);

  const style = {
    titleRecipe: {
      fontSize: "2rem",
      margin: "0",
      marginTop: "1.4rem",
    },
    contentTitleAndButtonFather: {
      display: "flex",
      justifyContent: "flex-end",
    },
    contentTitleAndButton: {
      width: "59%",
      display: "flex",
      justifyContent: "space-between",
    },

    contentSlider: {
      maxWidth: "400px",
      maxHeight: "300px",
      overflow: "hidden",
    },
    contentSliderIngredients: {
      marginTop: "1rem",
      display: "flex",
      justifyContent: "space-around",
      marginLeft: "6rem",
    },

    contentUserAndTimeRecipe: {
      width: "60%",
      display: "flex",
      justifyContent: "space-between",
      margin: "0 auto",
      marginTop: "2rem",
    },
    contentTimeRecipeAndPortions: {
      display: "flex",
    },
  };

  return (
    <div>
      {store.recipes && (
        <div style={style.contentTitleAndButtonFather}>
          <div style={style.contentTitleAndButton}>
            {store.recipes && <h2 style={style.titleRecipe}>{recipeName}</h2>}

            <ButtonPantryDiscount />
          </div>
        </div>
      )}
      {/* valuation */}
      <div>
        <CommentRateStars />
        <Link to={`/viewrecipe/commentrate/${params.id}`}>
          <button type="button" className="btn btn-secondary">
            View Comments and Rate
          </button>
        </Link>
      </div>
      {/* slider and ingredients */}
      <div style={style.contentSliderIngredients}>
        <div style={style.contentSlider}>
          <SliderRecipe />
        </div>
        <div>
          <FormRecipe />
        </div>
      </div>
      {/* user, time and portions */}
      <div style={style.contentUserAndTimeRecipe}>
        <UserRecipe />
        <div style={style.contentTimeRecipeAndPortions}>
          <TimeRecipe />
          <Portions />
        </div>
      </div>
      {/* steps */}
      <div>
        <Steps />
      </div>
    </div>
  );
};

export default ViewRecipe;
