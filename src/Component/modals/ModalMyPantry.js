import React, {useState, useContext} from 'react';
import { Context } from '../../Store/appContext'
import {Modal, TextField,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    modal:{
        position : "absolute",
        width: "600px",
        background: "#fff",
        border: "1px solid #828282",
        borderRadius: "12px",
        boxShadow: theme.shadows[5],
        //padding: theme.spacing[2,4,3],
        padding: "16px 32px 24px",
        top: "20%",
        left: "34%",
        transform: "transalte(-50%, -50%)",
    },
    textFieldIngredient:{
        width: "60%"
    },
    textFieldPortion:{
        width: "20%",
        marginLeft: "10%",
    },
    buttonOpenPantry:{
        margin:"0",
        textTransform: "lowercase",
        color: "#fff",
        padding: 0,
        fontWeight: 700,
        fontSize: "1.1rem"
    },
    closePantry:{
       background: "none",
       border: "none",
       marginLeft: "33rem",
    },
    buttonAddToPantry:{
        marginLeft: "12rem",
        marginTop: "1rem",
        border: "none",
        background: "#46a600",
        color: "#fff",
        fontWeight:600,
        padding: "0.3rem 2.5rem",
        borderRadius: "16px",
    },
    horizonalDivIngredient:{
        display:"flex",
    },
    contentIngredient:{
        maxHeight: "12rem",
        width: "100%",
        overflowY: "scroll"
    },
    addButton:{
        border: "none",
        background: "none",
        color: "rgb(0, 102, 255)",
        fontWeight:300,
        paddingTop: "2rem",
        marginLeft: "13.3rem"
    },
    paragraph:{
        color: "#828282",
        fontSize: "0.8rem",
        marginLeft: "11rem",
        marginTop: "1rem",
    }
}))

const ModalMyPantry = () => {

    const { store, actions} = useContext(Context)

    const styles = useStyles();

    //state
    const [modal, setModal] = useState(false);
    //state ingredient
    const [ingredientName, setIngredientName] = useState("");
    const [ingredientPortion, setIngredientPortion] = useState("");
    const [ingredientMeasure, setIngredientMeasure] = useState("");

    const abrirCerrarModal= () => {
        setModal(!modal)
    }

    const handleSubmitIngredientPantry = (e) => {
        e.preventDefault();
        actions.handleSubmitCreateIngredient(
            ingredientName,
            ingredientPortion,
            ingredientMeasure,
        )
    }

    const body = (
        <div className={styles.modal}>
            <button className={styles.closePantry} onClick={()=> abrirCerrarModal()}>x</button>
            <div aling="center">
                <h2>My pantry</h2>
            </div>
            <div className={styles.contentIngredient}>
                <div className={styles.horizonalDivIngredient}>
                    <TextField label="Ingredient" className={styles.textFieldIngredient} />
                    <TextField label="Portion" className={styles.textFieldPortion} />
                    <TextField label="measure" className={styles.textFieldPortion} />
                </div>
            </div>
            <button className={styles.addButton} >Add Ingredient</button>
            <button className={styles.buttonAddToPantry} >Add Pantry</button>
            <p className={styles.paragraph}>Can config MyPantry in your profile</p>
        </div>
    )

    return (
        <div>
            <Button className={styles.buttonOpenPantry} onClick={()=> abrirCerrarModal()} >Add my Pantry</Button>
            <Modal
             open = {modal}
             onClose = {abrirCerrarModal}>
                {body}
            </Modal>
        </div>
    );
}

export default ModalMyPantry;