import React from "react";
import clsx from 'clsx';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ClearIcon from '@material-ui/icons/Clear';
import {Grid} from '@material-ui/core';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    color: theme.palette.primary.light,
    border: `0.2px solid ${theme.palette.primary.light}`,
    // width: '25%',
    margin: theme.spacing(1),
    // height: '60%',
    
  },
  textField: {
    // flexBasis: 150,
    color: theme.palette.primary.light,
    fontSize: 10,
    textAlign: 'center'
  }
});

class InputSample extends React.Component {
 
  render() {
    const { classes } = this.props;
  
    return (
      <FormControl className={classes.root} margin="dense" size='small' variant='filled'>
        <InputLabel className={classes.textField} htmlFor="my-input" >Filter 1</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" 
              disableUnderline={true} type="search"  />
        <ClearIcon style={{position: 'absolute', right: 10, top: 17, width: 10, height: 10}}/>
      </FormControl>
    );
  }
}

InputSample.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputSample);
