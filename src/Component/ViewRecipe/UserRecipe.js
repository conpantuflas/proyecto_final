import React from 'react';
import "./style/userRecipe.css"
import person from "./image/person.jpg";

const UserRecipe = () => {
    return (
        <div className="firstContent_userRecipe">
            <div>
                <img className="image_UserRecipe" src={person} alt='x'/>
            </div>
            <div>
                <p className="name_UserRecipe">carlos suarez</p>
                <p className="userName_UserRecipe">@user_name</p>
            </div>
        </div>
    );
}

export default UserRecipe;
