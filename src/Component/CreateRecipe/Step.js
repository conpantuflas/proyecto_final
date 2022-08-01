import React from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  textFieldStep: {
    width: '80%',
  },
  buttonAddToPantry: {
    marginLeft: '12rem',
    marginTop: '1rem',
    border: 'none',
    background: '#46a600',
    color: '#fff',
    fontWeight: 600,
    padding: '0.3rem 2.5rem',
    borderRadius: '16px',
  },
  removeRow: {
    background: 'none',
    border: 'none',
    color: '#828282',
  },
}))

const Step = ({ onChange, onRemove, step }) => {
  const styles = useStyles()
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <TextField
        label="step"
        className={styles.textFieldStep}
        value={step}
        onChange={(e) => onChange('step', e.target.value)}
      />
      <button className={styles.removeRow} onClick={onRemove}>
        x
      </button>
    </form>
  )
}

export default Step
