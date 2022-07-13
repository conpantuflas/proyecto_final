import React, {useState} from 'react';
import {Modal, TextField,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ModalCreateAcount from './ModalCreateAcount';

const useStyles = makeStyles((theme)=>({
    modal:{
        position : "absolute",
        width: "400px",
        background: "#fff",
        border: "1px solid #828282",
        borderRadius: "12px",
        boxShadow: theme.shadows[5],
        //padding: theme.spacing[2,4,3],
        padding: "16px 32px 24px",
        top: "20%",
        left: "35%",
        transform: "transalte(-50%, -50%)",
    },
    textFieldIngredient:{
        width: "50%"
    },
    textFieldPortion:{
        width: "20%",
        marginLeft: "30%",
    },
    buttonOpen:{
        margin:"0 auto",
    },
    close:{
       background: "none",
       border: "none",
       marginLeft: "20rem",
    },
    buttonAddToPantry:{
        marginLeft: "5.5rem",
        marginTop: "1rem",
        border: "none",
        background: "#46a600",
        color: "#fff",
        fontWeight:600,
        padding: "0.3rem 2.5rem",
        borderRadius: "15px",
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
        padding: "1rem",
        marginLeft: "6rem"
    },
    paragraph:{
        color: "#828282",
        fontSize: "0.8rem",
        marginLeft: "4rem",
        marginTop: "1rem",
    }
}))

const ModalMyPantry = () => {
    const styles = useStyles();

    const [modal, setModal] = useState(false);

    const abrirCerrarModal= () => {
        setModal(!modal)
    }

    const body = (
        <div className={styles.modal}>
            <button className={styles.close} onClick={()=> abrirCerrarModal()}>x</button>
            <div aling="center">
                <h2>My pantry</h2>
            </div>
            <div className={styles.contentIngredient}>
                <div className={styles.horizonalDivIngredient}>
                    <TextField label="Ingredient" className={styles.textFieldIngredient} />
                    <TextField label="Portion" className={styles.textFieldPortion} />
                </div>
            </div>
            <button className={styles.addButton} >Add Ingredient</button>
            <button className={styles.buttonAddToPantry} >Add Pantry</button>
            <p className={styles.paragraph}>Can config MyPantry in your profile</p>
        </div>
    )

    return (
        <div>
            <Button className={styles.buttonOpen} onClick={()=> abrirCerrarModal()} >open modal my Pantry</Button>
            <Modal
             open = {modal}
             onClose = {abrirCerrarModal}>
                {body}
            </Modal>
        </div>
    );
}

export default ModalMyPantry;