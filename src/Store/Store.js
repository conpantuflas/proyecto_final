const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      //°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°
      createUser: {
        name: "",
        lastName: "",
        email: "",
        country: "",
        allergy: "",
        userName: "",
        password: "",
      },
      createIngredient: {
        ingredientName: "",
        ingredientPortion: "",
      },
      createComment: {
        id_user: "",
        id_recipe: "",
        comment: "",
        value: "",
      },
      comments: [],
    },

    actions: {
      //°°GET°°GET°°GET°°GET°°GET°°GET°°GET°°
      getCommentsByRecipeId: (id_recipe) => {
        fetch(`http://localhost:8080/get_comment_value/${id_recipe}`)
          .then((resp) => resp.json()) //Hasta aqui esta ok
          .then((commentData) => setStore({ comments: commentData })); //
        // .then((resp1) => console.log(resp1[1]))
        // .then((data) => console.log(data)); //Muestra la data pero no en el store
      },
      //°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°
      postComment: (id_user, id_recipe, comment, value) => {
        const { createComment } = getStore();

        createComment.id_user = id_user;
        createComment.id_recipe = id_recipe;
        createComment.comment = comment;
        createComment.value = value;

        fetch("http://localhost:8080/comment_value", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(createComment),
        })
          .then((resp) => resp.json())
          .then((respjs) => console.log(respjs));
      },

      handleSubmitCreateUser: (
        name,
        lastName,
        email,
        country,
        allergy,
        userName,
        password
      ) => {
        const { createUser } = getStore();

        createUser.name = name;
        createUser.last_name = lastName;
        createUser.email = email;
        createUser.country = country;
        createUser.allergy = allergy;
        createUser.user_name = userName;
        createUser.password = password;

        fetch("http://localhost:8080/crear_usuario", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(createUser),
        })
          .then((resp) => resp.json())
          .then((dataUser) => console.log());
      },
      handleSubmitCreateIngredient: (ingredientName, ingredientPortion) => {
        const { createIngredient } = getStore();

        createIngredient.ingredient_name = ingredientName;
        createIngredient.ingredient_portion = ingredientPortion;

        fetch("http://localhost:8080/crear_ingrediente", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(createIngredient),
        })
          .then((resp) => resp.json())
          .then((dataIngredient) => console.log(dataIngredient));
      },
    },
  };
};
export default getState;
