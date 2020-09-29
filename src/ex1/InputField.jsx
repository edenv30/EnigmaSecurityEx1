import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: 200,
        },
      },
      inputBase: {
        margin: 2,
        border: `1px solid ${theme.palette.primary.light}`,
        color: theme.palette.primary.light,
        height: "4vh",
        padding: theme.spacing(1),
        
        [theme.breakpoints.up('xs')]: {
            direction: "column",
            justify: 'flex-start',
            fontSize: 6,
        },
        [theme.breakpoints.up('md')]: {
            direction: "row",
            justify: "center",
            fontSize: 8,
        },
        [theme.breakpoints.up('lg')]: {
          direction: "row",
          justify: "center",
          fontSize: 10,
        },
    }
}))

const InputField = ({textField }) => {

    const classes = useStyles();

    return (
        <Grid xs>
            <InputBase 
                className={classes.inputBase}
                placeholder={textField}
                variant="outlined"
            />
        </Grid>
    )
}

export default InputField;