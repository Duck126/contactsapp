import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          rowsMax="4"
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          rowsMax="4"
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Phone Number"
          multiline
          rowsMax="4"
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
    </form>
  );
}