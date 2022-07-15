
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
            },
        },

        actions:{
            //°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°POSTS°°
            handleSubmitCreateUser: (name, lastName, email, country, allergy, userName, password) => {
            
                const { createUser } = getStore()

                createUser.name = name
                createUser.last_name = lastName
                createUser.email = email
                createUser.country = country
                createUser.allergy = allergy
                createUser.user_name = userName
                createUser.password = password

                fetch( "http://localhost:8080/crear_usuario" , {
                method:"POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify( createUser )
            })
            .then( resp => resp.json() )
            .then( dataUser => console.log() )
            },
            handleSubmitCreateIngredient:(ingredientName, ingredientPortion) => {
                const {  createIngredient } = getStore()

                createIngredient.ingredient_name = ingredientName
                createIngredient.ingredient_portion = ingredientPortion

                fetch(  "http://localhost:8080/crear_ingrediente", {
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