
const getState = ({setStore, getActions, getStore}) => {
    return{
        store:{
             //°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°
            createUser:{
                name:"",
                lastName:"",
                email:"",
                country:"",
                allergy:"",
                userName:"",
                password:""
            },
            createIngredient:{
                ingredientName: "",
                ingredientPortion:"",
                ingredientMeasure:"",
            },
        },

        actions:{
            //°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°

            //create user
            handleSubmitCreateUser: (name, lastName, email, country, allergy, userName, password) => {
            
                const { createUser } = getStore()

                createUser.name = name
                createUser.last_name = lastName
                createUser.email = email
                createUser.country = country
                createUser.allergy = allergy
                createUser.user_name = userName
                createUser.password = password

                fetch( "http://localhost:8080/user" , {
                method:"POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify( createUser )
            })
            .then( resp => resp.json() )
            .then( data => console.log(data) )
            },

            //login user
            handleSubmitLoginUser: (email,  password) => {
            
                const { createUser } = getStore()

                createUser.email = email
                createUser.password = password

                fetch( "http://localhost:8080/login" , {
                method:"POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify( createUser )
            })
            .then( resp => resp.json() )
            .then( data => console.log(data) )
            },

            //create ingredient
            handleSubmitCreateIngredient:(ingredientName, ingredientPortion, ingredientMeasure) => {
                const {  createIngredient } = getStore()

                createIngredient.ingredient_name = ingredientName
                createIngredient.ingredient_portion = ingredientPortion
                createIngredient.ingredient_measure = ingredientMeasure

                fetch(  "http://localhost:8080/create_ingredient", {
                    method:"POST",
                    headers:{
                        "content-type": "application/json"
                    },
                    body: JSON.stringify( createIngredient )
                })
                .then( resp => resp.json())
                .then( dataIngredient => console.log(dataIngredient))
            },
        }
    }
}
export default getState;