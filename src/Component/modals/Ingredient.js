import React from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  textFieldIngredient: {
    width: '60%',
  },
  textFieldPortion: {
    width: '20%',
    marginLeft: '10%',
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
  horizonalDivIngredient: {
    display: 'flex',
  },
  removeRow: {
    background: 'none',
    border: 'none',
    color: '#828282',
  },
}))

const Ingredient = ({
  onChange,
  onRemove,
  ingredientName,
  ingredientPortion,
  ingredientMeasure,
}) => {
  const styles = useStyles()
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={styles.horizonalDivIngredient}
    >
      <TextField
        label="Ingredient"
        className={styles.textFieldIngredient}
        value={ingredientName}
        onChange={(e) => onChange('ingredientName', e.target.value)}
      />
      <TextField
        label="Portion"
        className={styles.textFieldPortion}
        value={ingredientPortion}
        onChange={(e) => onChange('ingredientPortion', e.target.value)}
      />
      <TextField
        label="measure"
        className={styles.textFieldPortion}
        value={ingredientMeasure}
        onChange={(e) => onChange('ingredientMeasure', e.target.value)}
      />
      <button className={styles.removeRow} onClick={onRemove}>
        x
      </button>
    </form>
  )
}

export default Ingredient
