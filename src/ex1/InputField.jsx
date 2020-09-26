import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';

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
        // borderRadius: theme.shape.borderRadius,
        color: theme.palette.primary.light,
        height: "6vh",
        padding: theme.spacing(1),
        fontSize: 10
    }
}))

const InputField = ({textField, textId }) => {

    const classes = useStyles();

    return (
        <div>
            <InputBase 
                className={classes.inputBase}
                placeholder={textField}
                variant="outlined"
            />
        </div>
    )
}

export default InputField;