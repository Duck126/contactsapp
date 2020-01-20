import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import PropTypes from 'prop-types';




export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textmask: ['(1  )    -    '],
      placeholders: ['John Doe', 'Company Name', 'Email', 'Phone Number'],
      contactValues: {
        contactName: '',
        companyName: '',
        contactEmail: '',
        contactNumber: '',
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.useStyles = {
      root: {
        '& .MuiTextField-root': {
          width: 200,
        },
      },
    };
  }



  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      contactValues: {
        [name]: value,
      }
    });

    console.log(this.state.contactValues.contactNumber);
    console.log(name, "Target.name");
    console.log(target, "event.target");
    console.log(value, "Input Value");
  }

  render() {
    return (
      <form className={this.useStyles.root} noValidate autoComplete="off" >
        <div>
          <TextField
            name="contactName"
            id="outlined-multiline-flexible"
            label="Name"
            multiline
            rowsMax="4"
            value={this.value}
            onChange={this.handleInputChange}
            variant="outlined"
          />
          <TextField
            name="companyName"
            id="outlined-multiline-flexible"
            label="Company"
            multiline
            rowsMax="4"
            value={this.value}
            onChange={this.handleInputChange}
            variant="outlined"
          />
          <TextField
            name="contactEmail"
            id="outlined-multiline-flexible"
            label="Email"
            multiline
            rowsMax="4"
            value={this.value}
            onChange={this.handleInputChange}
            variant="outlined"
          />
          <MaskedInput
            name="contactNumber"
            id="outlined-multiline-flexible"
            label="Contact Number"
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            value={this.value}
            onChange={this.handleInputChange}
            variant="outlined"
            showMask
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save
      </Button>


      </form>
    );
  }
}



