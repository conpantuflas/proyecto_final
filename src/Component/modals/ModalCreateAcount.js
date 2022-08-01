import React, { useState, useContext } from 'react';
import { Context } from '../../Store/appContext';
import { Modal, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModalMyPantry from './ModalMyPantry';

const useStyles = makeStyles((theme) => ({
    modal: {
        position: "absolute",
        width: "500px",
        background: "#fff",
        border: "1px solid #828282",
        borderRadius: "12px",
        boxShadow: theme.shadows[5],
        //padding: theme.spacing[2,4,3],
        padding: "16px 32px 24px",
        top: "2%",
        left: "30%",
        transform: "transalte(-50%, -50%)",
    },
    textField: {
        width: "100%",
        marginBottom:"0.5rem"
    },
    buttonOpen: {
     
        color: "rgb(0, 102, 255)",
        textTransform: "lowercase",
        paddingBottom:"2rem"
    },
    close: {
        background: "none",
        border: "none",
        marginLeft: "27rem",
    },
    contentButtons: {
        dispaly: "inline",
    },
    buttonCreateAcount: {
        border: "none",
        background: "#46a600",
        color: "#fff",
        fontWeight: 700,
        padding: "0.3rem 2rem",
        borderRadius: "15px",
        marginLeft: "1.5rem",
    },
    buttonAddPantry: {
        border: "none",
        background: "#46a600",
        color: "#fff",
        fontWeight: 700,
        padding: "0.1rem 2rem",
        borderRadius: "15px",
        marginLeft: "1.5rem",
    },
    buttonNotificationEmail: {
        border: "none",
        background: "none",
        color: "rgb(0, 102, 255)",
        fontWeight: 300,
        paddingTop: "0.5rem",
        paddingBottom: "2rem",
        paddingLeft: "0.3rem",
    },
    title: {
        margin: 0,
    }
}))

const ModalCreateAcount = () => {
    
    const { actions } = useContext(Context)

    const styles = useStyles();

    // state
    const [modal, setModal] = useState(false);
    // User state
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [allergy, setAllergy] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // functions

const abrirCerrarModal = () => {
        setModal(!modal)
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        actions.handleSubmitCreateUser(
            name,
            lastName,
            email,
            country,
            allergy,
            userName,
            password
            )
    }

    const body = (
        <form className={styles.modal} onSubmit={(e) => handlesubmit(e)}>
            <button className={styles.close} onClick={() => abrirCerrarModal()}>x</button>
            <h2 className={styles.title}>Welcome</h2>

            <TextField label="Name" className={styles.textField}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />

            <TextField label="Last Name" className={styles.textField} 
                onChange={(e)=>{
                    setLastName(e.target.value)
                }}
            />

            <TextField label="email" className={styles.textField}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />

            <TextField label="Country" className={styles.textField}
                onChange={(e)=>{
                    setCountry(e.target.value)
                }}
            />

            <TextField label="allergy" className={styles.textField} 
                onChange={(e)=>{
                    setAllergy(e.target.value)
                }}
            /> 

            <TextField label="userName" className={styles.textField}
                onChange={(e)=>{
                    setUserName(e.target.value)
                }}
            /> 

            <TextField label="password"  type="password" className={styles.textField} 
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />

            <div>
                <input type="checkbox" />
                <button className={styles.buttonNotificationEmail} >I want to receive notifications in my email</button>
            </div>

            <div className={styles.contentButtons}>
                <button className={styles.buttonCreateAcount} onClick={(e)=>handlesubmit(e)} >Create Acount</button>
                <button className={styles.buttonAddPantry} > <ModalMyPantry /> </button>
            </div>

        </form>
    )

    return (
        <div>
            <Button className={styles.buttonOpen} onClick={() => abrirCerrarModal()} >Create Acount</Button>
            <Modal
                open={modal}
                onClose={abrirCerrarModal}>
                {body}
            </Modal>
        </div>
    );
}

export default ModalCreateAcount;