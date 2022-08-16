const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      //°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°
      //*user*user*user*user*user*user*user*user*user*user*user*user*user*user*user*user*user*user*user*user
      createUser: {
        name: '',
        lastName: '',
        email: '',
        country: '',
        allergy: '',
        userName: '',
        password: '',
      },

      createIngredient: {
        ingredientName: '',
        ingredientPortion: '',
      },

      loggedUserResponse: [],

      loggedUserResponse2: {
        id: 0,
        name: '',
        userName: '',
      },

      createComment: {
        id_user: '',
        id_recipe: '',
        comment: '',
        value: '',
      },
      comments: [],
      recipes: [],
      recipeAuth: [],
      ingredientsById: [],
      ingredients_all: [],
      recipes_all: [],
      active_token: [],

      //*createPantry*createPantry*createPantry*createPantry*createPantry*createPantry*createPantry*createPantry
      createPantry: {
        pantryId: 0,
      },

      createDetailIngredientPantry: {
        ingredient_name: '',
        i_details_portion: 0,
        i_details_measure: '',
      },

      tokenLogin: {
        token: '',
        userId: 0,
      },

      //createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*
      createRecipe: {
        nameRecipe: '',
        time: '',
        portion: 0,
      },

      recipe_id: 0,
      recipesByUser: [],
      nameRecipe: '',
      portion: 0,
      time: '',
      step: [],
      ingredientDetails: [],
      ingredientName: '',
      recipeIdGet: 0,
    },

    actions: {
      //°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°

      //createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*

      //all recipes
      recipes: () => {
        fetch('http://localhost:8080/recipes')
          .then((resp) => resp.json())
          .then((data) => data)
      },

      //all recipes by user
      recipesUser: async (id) => {
        if (id != 0) {
          await fetch(`http://localhost:8080/recipes_user/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
              setStore({ recipesByUser: data })
            })
        }
      },

      getRecipe: (id) => {
        fetch(`http://localhost:8080/get_recipe/${id}`)
          .then((resp) => resp.json())
          .then((data) =>
            setStore({
              portion: data.portion,
              time: data.time,
              nameRecipe: data.name_recipe,
              recipeIdGet: data.id,
            })
          )
      },

      getRecipeIngredient: async (id) => {
        await fetch(`http://localhost:8080/get_ingredient_recipe/${id}`)
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ ingredientDetails: data })
          })
      },

      getIngredientName: (id) => {
        fetch(`http://localhost:8080/get_i_name/${id}`)
          .then((resp) => resp.json())
          .then((data) => setStore({ ingredientName: data.ingredient_name }))
      },

      getStep: async (id) => {
        await fetch(`http://localhost:8080/get_step/${id}`)
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ step: data })
          })
      },

      handleSubmitCreateRecipe: async (nameRecipe, time, portion) => {
        const { createRecipe, tokenLogin } = getStore()

        createRecipe.time = time
        createRecipe.portion = portion
        createRecipe.name_recipe = nameRecipe

        const recipeId = await fetch('http://localhost:8080/create_recipe', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            time: createRecipe.time,
            portion: createRecipe.portion,
            name_recipe: createRecipe.name_recipe,
            user_id: tokenLogin.userId,
          }),
        })
          .then((resp) => resp.json())
          .then((data) => {
            return data.id
          })

        setStore({
          recipe_id: recipeId,
        })
      },

      handleSubmitCreateIngredientRecipe: (ingredientName) => {
        const { recipe_id } = getStore()

        if (recipe_id != 0) {
          fetch('http://localhost:8080/create_details_ingredient_recipe', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              i_details_portion: Number(ingredientName.ingredientPortion),
              i_details_measure: ingredientName.ingredientMeasure,
              ingredient_name: ingredientName.ingredientName,
              recipe_id: recipe_id,
            }),
          })
            .then((resp) => resp.json())
            .then((data) => console.log(data))
        } else {
          console.log('fallo')
        }

        //detail of ingredint
      },
      handleLoginToken: () => {
        //se hace en el componente
        const { loggedUser } = getStore()
        loggedUser.email = 'AG@asdads.com' //user2@mail.com //asdasdasd@asdads.com //AG@asdads.com
        loggedUser.password = '789abcA!@@' //123abcA! // 456abcA!@@ //789abcA!@@

        fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(loggedUser),
        })
          .then((resp) => resp.json())
          .then((respjs) => setStore({ active_token: respjs.access_token }))
        // .then((resjs) => console.log(resjs)); //Falta hacer que la respuesta haga setStore, la respuesta del console log es: {access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2N…NzIn0.VXQt9tId7q-UQOFg55G6GlY6PMcU01fYdlEc5vHXV-U', user: {…}}
      },

      handleLogout: () => {
        const { loggedUser } = getStore()
        setStore({ loggedUserResponse: [] })
      },

      handleSubmitCreateStep: (step) => {
        const { recipe_id } = getStore()

        fetch('http://localhost:8080/create_step', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            step: step,
            recipe_id: recipe_id,
          }),
        })
          .then((resp) => resp.json())
          .then((data) => console.log(data))
      },

      //*pantry*pantry*pantry*pantry*pantry*pantry*pantry*pantry*pantry*pantry*pantry*pantry*pantry*pantry
      handleSubmitCreateIngredient: (ingredientName) => {
        const { createDetailIngredientPantry, tokenLogin } = getStore()

        createDetailIngredientPantry.ingredient_name =
          ingredientName.ingredientName

        createDetailIngredientPantry.i_details_portion = Number(
          ingredientName.ingredientPortion
        )

        createDetailIngredientPantry.i_details_measure =
          ingredientName.ingredientMeasure

        console.log(tokenLogin.userId)

        //detail of ingredint
        fetch('http://localhost:8080/create_details_ingredient_pantry', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            i_details_portion: createDetailIngredientPantry.i_details_portion,
            i_details_measure: createDetailIngredientPantry.i_details_measure,
            ingredient_name: createDetailIngredientPantry.ingredient_name,
            user_id: tokenLogin.userId,
          }),
        })
          .then((resp) => resp.json())
          .then((data) => console.log(data))
      },

      getRecipes: () => {
        fetch(`http://localhost:8080/recipes`)
          .then((resp) => resp.json())
          .then((recipeData) => setStore({ recipes_all: recipeData }))
      },

      getRecipeById: (id) => {
        fetch(`http://localhost:8080/recipe_by_id/${id}`)
          .then((resp) => resp.json())
          .then((recipeData) => setStore({ recipes: recipeData }))
      },

      getRecipesByUserId: (id_user) => {
        //LA idea es que se le pasa el usuario activo con los datos que estan en store.loggedUserResponse.user_id
        fetch(`http://localhost:8080/recipes_by_user/${id_user}`)
          .then((resp) => resp.json())
          .then((recipeData) => setStore({ recipes: recipeData }))
      },
      getRecipesByIdUserData: (id) => {
        //LA idea es que se le pasa el usuario activo con los datos que estan en store.loggedUserResponse.user_id
        fetch(`http://localhost:8080/recipe_by_id_get_author/${id}`)
          .then((resp) => resp.json())
          .then((userData) => setStore({ recipeAuth: userData }))
      },
      getIngredients: () => {
        fetch(`http://localhost:8080/ingredient`)
          .then((resp) => resp.json())
          .then((ingredientsData) =>
            setStore({ ingredients_all: ingredientsData })
          )
      },
      getIngredientsByRecipeId: (id) => {
        fetch(`http://localhost:8080/ingredient_recipe_id/${id}`)
          .then((resp) => resp.json())
          .then((ingredientsData) =>
            setStore({ ingredientsById: ingredientsData })
          )
      },
      getCommentsByRecipeId: (id_recipe) => {
        fetch(`http://localhost:8080/get_comment_value/${id_recipe}`)
          .then((resp) => resp.json())
          .then((commentData) => setStore({ comments: commentData }))
      },

      postComment: (id_user, id_recipe, comment, value) => {
        const { createComment } = getStore()

        createComment.id_user = id_user
        createComment.id_recipe = id_recipe
        createComment.comment = comment
        createComment.value = value

        fetch('http://localhost:8080/comment_value', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(createComment),
        })
          .then((resp) => resp.json())
          .then((respjs) => console.log(respjs))
          .catch((error) => console.log(error.response.data))
        // window.location.reload(false);
        window.setTimeout(() => {
          window.location.reload()
        }, 2000)
      },

      handleLogin: () => {
        //se hace en el componente
        const { loggedUser } = getStore()
        loggedUser.email = 'AG@asdads.com' //user2@mail.com //asdasdasd@asdads.com //AG@asdads.com
        loggedUser.password = '789abcA!@@' //123abcA! // 456abcA!@@ //789abcA!@@

        fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(loggedUser),
        })
          .then((resp) => resp.json())
          .then((respjs) => setStore({ loggedUserResponse: respjs.user }))
        // .then((resjs) => console.log(resjs)); //Falta hacer que la respuesta haga setStore, la respuesta del console log es: {access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2N…NzIn0.VXQt9tId7q-UQOFg55G6GlY6PMcU01fYdlEc5vHXV-U', user: {…}}
      },

      handleSubmitCreateUser: async (
        name,
        lastName,
        email,
        country,
        allergy,
        userName,
        password
      ) => {
        const {
          createUser,
          createPantry,
          createDetailIngredientPantry,
          tokenLogin,
        } = getStore()

        createUser.name = name
        createUser.last_name = lastName
        createUser.email = email
        createUser.country = country
        createUser.allergy = allergy
        createUser.user_name = userName
        createUser.password = password

        const user = await fetch('http://localhost:8080/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(createUser),
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data)

            setStore({
              tokenLogin: {
                token: data.access_token,
                userId: data.user.id,
              },
            })
            fetch('http://localhost:8080/create_my_pantry', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${data.access_token}`,
              },
              body: JSON.stringify({
                user_id: data.user.id,
              }),
            })
              .then((resp) => resp.json())
              .then((data) => {
                createPantry.pantryId = data.pantryId
                createDetailIngredientPantry.pantryId = data.pantryId
                console.log(data)
              })
          })
      },

      handleSubmitLoginUser: (email, password) => {
        const { createUser } = getStore()

        createUser.email = email
        createUser.password = password

        fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(createUser),
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data)

            setStore({
              loggedUserResponse2: {
                id: data.user.id,
                name: data.user.name,
                userName: data.user.user_name,
              },
              tokenLogin: {
                token: data.access_token,
                userId: data.user.id,
              },
            })
          })
      },
    },
  }
}
export default getState
