import React, {useState, useContext} from 'react';
import { Context } from '../../Store/appContext'
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
        top: "2%",
        left: "35%",
        transform: "transalte(-50%, -50%)",
    },
    textField:{
        width: "100%"
    },
    buttonOpenLogin:{
        margin:"0 auto",
        color: "rgb(0, 102, 255)",
        textTransform: "lowercase"
    },
    close:{
       background: "none",
       border: "none",
       marginLeft: "20rem",
    },
    buttonLogin:{
        marginLeft: "7rem",
        border: "none",
        background: "#46a600",
        color: "#fff",
        fontWeight:700,
        padding: "0.3rem 2.5rem",
        borderRadius: "15px",
    },
    buttonSingUp:{
        marginLeft: "3rem",
        border: "none",
        background: "none",
        color: "rgb(0, 102, 255)",
        fontWeight:300,
        padding: "3rem 2.5rem",
        borderRadius: "15px",
    }
}))

const ModalSessionStart = () => {

    const {  actions } = useContext(Context)

    const styles = useStyles();

    // state
    const [modal, setModal] = useState(false);
    //user login state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const abrirCerrarModal= () => {
        setModal(!modal)
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        actions.handleSubmitLoginUser( email, password )
    }

    const body = (
        <div className={styles.modal}>
            <button className={styles.close} onClick={()=> abrirCerrarModal()}>x</button>
            <div aling="center">
                <h2>Session Start</h2>
            </div>
            <br/>
            <TextField label="Email" className={styles.textField} 
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
            />
            <br/>  <br/>
            <TextField label="Password" type="password" className={styles.textField} 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
            />
            <br/>  
            <ModalCreateAcount />
            <button className={styles.buttonLogin} onClick={ (e) => handleSubmitLogin(e) }
            >Login</button>
        </div>
    )

    return (
        <div>
            <Button className={styles.buttonOpenLogin} onClick={()=> abrirCerrarModal()} > Login </Button>
            <Modal
             open = {modal}
             onClose = {abrirCerrarModal}>
                {body}
            </Modal>
        </div>
    );
}

export default ModalSessionStart;
