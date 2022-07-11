import React from 'react';
import ButtonPantryDiscount from '../Component/ViewRecipe/ButtonPantryDiscount';
import TimeRecipe from '../Component/ViewRecipe/TimeRecipe';
import FormRecipe from '../Component/ViewRecipe/FormRecipe';
import SliderRecipe from '../Component/ViewRecipe/SliderRecipe';
import UserRecipe from '../Component/ViewRecipe/UserRecipe';
import Portions from '../Component/ViewRecipe/Portions';
import Valuation from '../Component/ViewRecipe/Valuation';
import Steps from '../Component/ViewRecipe/Steps';
import Navbar from '../Component/Navbar/Navbar';

const ViewRecipe = () => {

    const style = {
        titleRecipe:{
            fontSize: "2rem",
            margin: "0",
            marginTop: "1.4rem",
        },
        contentTitleAndButtonFather:{
            display:"flex",
            justifyContent:"flex-end"
        },
        contentTitleAndButton:{
            width: "59%",
            display:"flex",
            justifyContent:"space-between"
        },

        contentSlider:{
            maxWidth: "400px",
            maxHeight: "300px",
            overflow: "hidden",
        },
        contentSliderIngredients:{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-around",
            marginLeft:"6rem",
        },

        contentUserAndTimeRecipe:{
            width: "60%",
            display:"flex",
            justifyContent:"space-between",
            margin: "0 auto",
            marginTop: "2rem",
        },
        contentTimeRecipeAndPortions:{
            display:"flex",
        },
    }

    return (
        <div>
            <Navbar />

{/* all of title and button dicount */}
            <div style={style.contentTitleAndButtonFather} >
                <div style={style.contentTitleAndButton} >
                    <h2 style={style.titleRecipe}>Title of recipe</h2>
                    <ButtonPantryDiscount />
                </div> 
            </div>  

{/* valuation */}
            <div>  
                <Valuation /> 
            </div>
          
{/* slider and ingredients */}          
            <div style={style.contentSliderIngredients}>
                <div style={style.contentSlider} >
                     <SliderRecipe />
                </div>
                <div>
                     <FormRecipe />
                </div>
            </div>

{/* user, time and portions */}    
            <div style={style.contentUserAndTimeRecipe}>
                <UserRecipe />
                <div style={style.contentTimeRecipeAndPortions} >
                     <TimeRecipe />
                     <Portions />   
                </div>
            </div>

{/* steps */} 
            <div>
                <Steps />
            </div>
            
        </div>
    );
}

export default ViewRecipe;
