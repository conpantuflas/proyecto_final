import React, { useState, useContext } from 'react'
import { Context } from '../../Store/appContext'
import { Modal, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ModalCreateAcount from './ModalCreateAcount'

const useStyles = makeStyles(theme => ({
  modal: {
    position: 'absolute',
    width: '400px',
    background: '#fff',
    border: '1px solid #828282',
    borderRadius: '12px',
    boxShadow: theme.shadows[5],
    //padding: theme.spacing[2,4,3],
    padding: '16px 32px 24px',
    top: '30%',
    left: '35%',
    transform: 'transalte(-50%, -50%)'
  },
  textField: {
    width: '100%'
  },
  buttonOpen: {
    margin: '0 auto',
    textAlign: 'left',
    textTransform: 'capitalize'
  },
  close: {
    background: 'none',
    border: 'none',
    marginLeft: '20rem'
  },
  buttonLogin: {
    marginLeft: '7rem',
    border: 'none',
    background: '#46a600',
    color: '#fff',
    fontWeight: 700,
    padding: '0.3rem 2.5rem',
    borderRadius: '15px'
  },
  buttonSingUp: {
    marginLeft: '7rem',
    border: 'none',
    background: 'none',
    color: 'rgb(0, 102, 255)',
    fontWeight: 300,
    padding: '3rem 2.5rem',
    borderRadius: '15px'
  }
}))

const ModalSessionStart = () => {
  const styles = useStyles()
  const [user, setUser] = useState('')
  const [passw, setPassw] = useState('')
  const { actions, store } = useContext(Context)
  const [modal, setModal] = useState(false)

  const abrirCerrarModal = () => {
    setModal(!modal)
  }

  const handleUserInput = e => {
    const userInput = e.target.value
    setUser(userInput)
  }

  const handlePassIn = e => {
    const passInput = e.target.value
    setPassw(passInput)
  }

  const logInButton = e => {
    e.preventDefault()
    actions.handleLogin(user, passw)
    setModal(!modal)
  }

  const body = (
    <div className={styles.modal}>
      <button className={styles.close} onClick={() => abrirCerrarModal()}>
        x
      </button>
      <div aling="center">
        <h2>Session Start</h2>
      </div>
      <br />
      <TextField
        label="User Name"
        className={styles.textField}
        onChange={handleUserInput}
      />
      <br /> <br />
      <TextField
        label="Password"
        className={styles.textField}
        onChange={handlePassIn}
      />
      <br /> <br />
      <button className={styles.buttonLogin} onClick={logInButton}>
        Login
      </button>
    </div>
  )

  return (
    <div>
      {/* className={styles.buttonOpen} */}
      <Button className={styles.buttonOpen} onClick={() => abrirCerrarModal()}>
        Log in
      </Button>
      <Modal open={modal} onClose={abrirCerrarModal}>
        {body}
      </Modal>
    </div>
  )
}

export default ModalSessionStart
