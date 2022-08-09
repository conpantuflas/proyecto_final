import React, { useState } from 'react'
import { Modal, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ModalCreateAcount from './ModalCreateAcount'

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: '400px',
    background: '#fff',
    border: '1px solid #828282',
    borderRadius: '12px',
    boxShadow: theme.shadows[5],
    padding: '16px 32px 24px',
    top: '30%',
    left: '35%',
    transform: 'transalte(-50%, -50%)',
  },
  textField: {
    width: '100%',
  },
  buttonOpen: {
    margin: '0 auto',
  },
  close: {
    background: 'none',
    border: 'none',
    marginLeft: '20rem',
  },
  buttonLogin: {
    marginLeft: '7rem',
    border: 'none',
    background: '#46a600',
    color: '#fff',
    fontWeight: 700,
    padding: '0.3rem 2.5rem',
    borderRadius: '15px',
  },
  buttonSingUp: {
    marginLeft: '7rem',
    border: 'none',
    background: 'none',
    color: 'rgb(0, 102, 255)',
    fontWeight: 300,
    padding: '3rem 2.5rem',
    borderRadius: '15px',
  },
}))

const ModalSessionStart = () => {
  const styles = useStyles()

  const [modal, setModal] = useState(false)

  const abrirCerrarModal = () => {
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
      <TextField label="User Name" className={styles.textField} />
      <br />
      <TextField label="Password" className={styles.textField} />
      <br />
      <button className={styles.buttonSingUp}>
        <ModalCreateAcount />
      </button>
      <button className={styles.buttonLogin}>Login</button>
    </div>
  )

  return (
    <div>
      <Button className={styles.buttonOpen} onClick={() => abrirCerrarModal()}>
        open session start modal
      </Button>
      <Modal open={modal} onClose={abrirCerrarModal}>
        {body}
      </Modal>
    </div>
  )
}

export default ModalSessionStart
