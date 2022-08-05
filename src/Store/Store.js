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
      loggedUser: {
        email: "",
        password: "",
      },
      loggedUserResponse: [],
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
      recipes: [],
      recipeAuth: [],
      ingredientsById: [],
      ingredients_all: [],
      recipes_all: [],
    },

    actions: {
      //°°GET°°GET°°GET°°GET°°GET°°GET°°GET°°
      getCommentsByRecipeId: (id_recipe) => {
        fetch(`http://localhost:8080/get_comment_value/${id_recipe}`)
          .then((resp) => resp.json())
          .then((commentData) => setStore({ comments: commentData }));
      },
      getRecipes: () => {
        fetch(`http://localhost:8080/recipes`)
          .then((resp) => resp.json())
          .then((recipeData) => setStore({ recipes_all: recipeData }));
      },
      getRecipeById: (id) => {
        fetch(`http://localhost:8080/recipe_by_id/${id}`)
          .then((resp) => resp.json())
          .then((recipeData) => setStore({ recipes: recipeData }));
      },
      getRecipesByUserId: (id_user) => {
        //LA idea es que se le pasa el usuario activo con los datos que estan en store.loggedUserResponse.user_id
        fetch(`http://localhost:8080/recipes_by_user/${id_user}`)
          .then((resp) => resp.json())
          .then((recipeData) => setStore({ recipes: recipeData }));
      },
      getRecipesByIdUserData: (id) => {
        //LA idea es que se le pasa el usuario activo con los datos que estan en store.loggedUserResponse.user_id
        fetch(`http://localhost:8080/recipe_by_id_get_author/${id}`)
          .then((resp) => resp.json())
          .then((userData) => setStore({ recipeAuth: userData }));
      },
      getIngredients: () => {
        fetch(`http://localhost:8080/ingredient`)
          .then((resp) => resp.json())
          .then((ingredientsData) =>
            setStore({ ingredients_all: ingredientsData })
          );
      },
      getIngredientsByRecipeId: (id) => {
        fetch(`http://localhost:8080/ingredient_recipe_id/${id}`)
          .then((resp) => resp.json())
          .then((ingredientsData) =>
            setStore({ ingredientsById: ingredientsData })
          );
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
          .then((respjs) => console.log(respjs))
          .catch((error) => console.log(error.response.data));
        // window.location.reload(false);
        window.setTimeout(() => {
          window.location.reload();
        }, 2000);
      },

      handleLogin: () => {
        //se hace en el componente
        const { loggedUser } = getStore();
        loggedUser.email = "user2@mail.com"; //user2@mail.com //asdasdasd@asdads.com //AG@asdads.com
        loggedUser.password = "123abcA!"; //123abcA! // 456abcA!@@ //789abcA!@@

        fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((resp) => resp.json())
          .then((respjs) => setStore({ loggedUserResponse: respjs.user }));
        // .then((resjs) => console.log(resjs)); //Falta hacer que la respuesta haga setStore, la respuesta del console log es: {access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2N…NzIn0.VXQt9tId7q-UQOFg55G6GlY6PMcU01fYdlEc5vHXV-U', user: {…}}
      },

      handleLogout: () => {
        const { loggedUser } = getStore();
        setStore({ loggedUserResponse: [] });
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
