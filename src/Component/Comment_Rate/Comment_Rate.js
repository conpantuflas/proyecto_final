import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import CommentsRatesPortrait from "./Comment_Rate_Portrait";
import CommentRateUserCard from "./Comment_Rate_User_Card";
import "./Comment_Rate.css";
import img1 from "./img1.jpg";
import user1 from "./user1.jpg";

const CommentsRates = () => {
  let [avgRating, setAvgRating] = useState(""); //AVG rating for stars
  let [data, setData] = useState([
    {
      id: 1,
      user: "Pedrito",
      user_img: user1,
      comment:
        "Sit velit sint voluptate consectetur enim anim do cupidatat tempor laboris culpa voluptate. Esse non proident est tempor esse laboris Lorem in. Veniam sint eu sunt voluptate minim officia ad exercitation commodo eu adipisicing cillum qui. Aute eu sint eu ex aliqua velit adipisicing dolor est consequat proident sunt duis. In in ipsum ipsum est cupidatat id anim nulla. Ipsum dolor officia culpa eiusmod adipisicing ad dolor. Nisi Lorem nostrud enim irure adipisicing eu mollit excepteur ipsum ipsum mollit.",
      rating: 5,
    },

    { id: 2, user: "Juanita", rating: 3 },
    { id: 3, user: "Felipe", rating: 3 },
    { id: 4, user: "Clara" },
  ]);

  let avgRatings = () => {
    //Obtener promedio de rating
    let ratingSum = 0; //Suma campo rating
    let nonNullRatingCount = 0; // Cuenta total de cantidad de
    data.forEach((datai) => {
      if (datai.rating != null) {
        nonNullRatingCount = nonNullRatingCount + 1;
        ratingSum = datai.rating + ratingSum;
      }
    });
    setAvgRating(Math.round(ratingSum / nonNullRatingCount));
    return avgRating;
  };

  let dataFromPortrait = (dataFromChild) => {
    let dataFromChildPortrait = dataFromChild;
    console.log(dataFromChildPortrait); //gets data from portrait which comes from crbutton
    // data.push(dataFromChildPortrait);
    setData([...data, ...dataFromChildPortrait]);
    console.log(data);
  };

  return (
    <>
      <div className="container d-flex flex-column mb-3">
        <CommentsRatesPortrait
          portraitImg={img1}
          avgRating={() => avgRatings()}
          getDataFromPortrait={dataFromPortrait}
        />
        {data.map((datai) => {
          return (
            <CommentRateUserCard
              key={datai.id}
              userName={datai.user}
              userImg={datai.user_img}
              userComment={datai.comment}
              userRating={datai.rating}
            />
          );
        })}
      </div>
    </>
  );
};

export default CommentsRates;
