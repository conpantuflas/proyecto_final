
const getState = ({setStore, getActions, getStore}) => {
    return{
        store:{
            user:{
                fullName:"",
                email:"",
                password:""
            }
        },

        actions:{
            handleSubmitCreateUser: (fullName, email, password) => {
            
                const { user } = getStore()

                user.fullName = fullName
                user.email = email
                user.password = password

                fetch( "http://localhost:8080/crear_usuario" , {
                method:"POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify( user )
            })
            .then( resp => resp.json() )
            .then( data => console.log(data) )
            },
        }
    }
}
export default getState;