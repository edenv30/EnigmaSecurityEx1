import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ClearIcon from '@material-ui/icons/Clear';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  root: {
    color: theme.palette.primary.light,
    border: `0.2px solid ${theme.palette.primary.light}`,
    margin: theme.spacing(1),
    
    [theme.breakpoints.up('xs')]: {
      border: `0.1px solid ${theme.palette.primary.light}`,
      maxWidth: '60%', 
  },
  [theme.breakpoints.up('md')]: {
    border: `0.2px solid ${theme.palette.primary.light}`,
      direction: "row",
      justify: "center",
      maxWidth: '80%', 
  },
  [theme.breakpoints.up('lg')]: {
    border: `0.3px solid ${theme.palette.primary.light}`,
    direction: "row",
    justify: "center",
    maxWidth: '100%', 

  },
  },
  textField: {
    color: theme.palette.primary.light,
    [theme.breakpoints.up('xs')]: {
      fontSize: 4,
      // textAlign: 'flex-start',
      direction: "column",
      // justify: 'flex-start'
  },
  [theme.breakpoints.up('md')]: {
      fontSize: 6,
      direction: "row",
      justify: "center"
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 10,
    textAlign: 'center'

  },
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
