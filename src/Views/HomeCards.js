import React, { useEffect, useContext, useState } from "react";
import { Context } from "../Store/appContext";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import img1_recipe from "./homecards_img/img1_supersimplesalmon.jpg";
import img2_recipe from "./homecards_img/img2_besticecrea.jpg";
import img3_recipe from "./homecards_img/img3_guacamole.jpg";

const HomeCards = () => {
  const { actions, store } = useContext(Context);
  const [recipe_1, setRecipe1] = useState([]);
  const [recipe_2, setRecipe2] = useState([]);
  const [recipe_3, setRecipe3] = useState([]);
  useEffect(() => {
    window.setTimeout(() => {
      actions.getRecipes();
      setRecipe1(store.recipes_all[0]);
    }, 2000);
    window.setTimeout(() => {
      setRecipe1(store.recipes_all[0]);
      setRecipe2(store.recipes_all[1]);
      setRecipe3(store.recipes_all[2]);
    }, 3000);
  }, []);

  // let recipe1 = store.recipes_all[0];

  return (
    <>
      {recipe_1 && (
        <div className="card home-card mb-3" style={{ maxWidth: 400 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={img1_recipe}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{recipe_1.name_recipe}</h5>
                <p className="card-text">by: {recipe_1.user_name}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {recipe_2 && (
        <div className="card home-card mb-3" style={{ maxWidth: 400 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={img2_recipe}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{recipe_2.name_recipe}</h5>
                <p className="card-text">by: {recipe_2.user_name}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {recipe_3 && (
        <div className="card home-card mb-3" style={{ maxWidth: 400 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={img3_recipe}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{recipe_3.name_recipe}</h5>
                <p className="card-text">by: {recipe_3.user_name}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeCards;
