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
    },

    actions: {
      //°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°

      //createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*createRecipe*

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
