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

      createDetailIngredientRecipe: {
        ingredient_name: '',
        i_details_portion: 0,
        i_details_measure: '',
      },

      createStep: {
        step: '',
        recipe_id: 0,
      },
    },

    actions: {
      //°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°

      //createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*
      handleSubmitCreateRecipe: (nameRecipe, time, portion) => {
        const { createRecipe, tokenLogin } = getStore()

        createRecipe.time = time
        createRecipe.portion = portion
        createRecipe.name_recipe = nameRecipe

        fetch('http://localhost:8080/create_recipe', {
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
          .then((data) => console.log(data))
      },

      handleSubmitCreateIngredientRecipe: (ingredientName) => {
        const { createDetailIngredientRecipe, tokenLogin, createStep } =
          getStore()

        createDetailIngredientRecipe.ingredient_name =
          ingredientName.ingredientName

        createDetailIngredientRecipe.i_details_portion = Number(
          ingredientName.ingredientPortion
        )

        createDetailIngredientRecipe.i_details_measure =
          ingredientName.ingredientMeasure

        //detail of ingredint
        fetch('http://localhost:8080/create_details_ingredient_recipe', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            i_details_portion: createDetailIngredientRecipe.i_details_portion,
            i_details_measure: createDetailIngredientRecipe.i_details_measure,
            ingredient_name: createDetailIngredientRecipe.ingredient_name,
            user_id: tokenLogin.userId,
          }),
        })
          .then((resp) => resp.json())
          .then((data) => (createStep.recipe_id = data.recipe_id))
      },

      handleSubmitCreateStep: (step) => {
        const { createStep, tokenLogin } = getStore()

        createStep.step = step

        fetch('http://localhost:8080/create_step', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            step: createStep.step,
            user_id: tokenLogin.userId,
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

      //*user*user*user*user*user*user*user*user*user*user*user*user*user*user*user*user*user*user*user*user
      //create user
      handleSubmitCreateUser: (
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

        fetch('http://localhost:8080/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(createUser),
        })
          .then((resp) => resp.json())
          .then((data) => {
            tokenLogin.userId = data.user.id
            tokenLogin.token = data.access_token
          })

        fetch('http://localhost:8080/create_my_pantry', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${tokenLogin.token}`,
          },
          body: JSON.stringify({
            user_id: tokenLogin.userId,
          }),
        })
          .then((resp) => resp.json())
          .then((data) => {
            createPantry.pantryId = data.pantryId
            createDetailIngredientPantry.pantryId = data.pantryId
          })
      },

      //*login-user*login-user*login-user*login-user*login-user*login-user*login-user*login-user*login-user
      handleSubmitLoginUser: (email, password) => {
        const { createUser, tokenLogin } = getStore()

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
            tokenLogin.token = data.access_token
            tokenLogin.userId = data.user.id
          })
      },
    },
  }
}
export default getState
