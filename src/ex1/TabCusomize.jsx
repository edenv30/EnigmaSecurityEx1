import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

import InputSample from './InputSample';

const useStyles = makeStyles((theme) => ({
    divStyle: {
        flexGrow: 1,
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
        borderBottom: `2px solid ${theme.palette.secondary.main}`,      
        fontSize: 10,
        minHeight: 20,
    },
    spanStyle: {
      // marginLeft: '0.8rem'
      margin: '15px'
    }
  }));

const TabCustomize = () => {

    const classes = useStyles();

    return(
        <div className={classes.divStyle}>
            <Grid container>
                <Grid item xs={3}>
                    <span className={classes.spanStyle}>FILTERS APPLIED: </span>
                </Grid>
                <Grid item xs={3}>
                    <InputSample />
                </Grid>
                <Grid item xs={3}>
                    <InputSample />
                </Grid>
                <Grid item xs={3}>
                    <InputSample />
                </Grid>
            </Grid>
            
        </div>


    )
}
export default TabCustomize;