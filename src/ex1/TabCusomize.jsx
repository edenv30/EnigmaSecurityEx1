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
        fontSize: 8,
        // minHeight: 20,
    },
    spanStyle: {
      // marginLeft: '0.8rem'
      margin: '15px',
      [theme.breakpoints.up('xs')]: {
        direction: "column",
        justify: 'flex-start'
    },
    [theme.breakpoints.up('md')]: {
        direction: "row",
        justify: "center"
    },
    [theme.breakpoints.up('lg')]: {
      direction: "row",
      justify: "center"

    },
    },

    
  }));

const TabCustomize = () => {

    const classes = useStyles();

    return(
        <Grid className={classes.divStyle}>
            <Grid container direction="row" alignItems="center">
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
        </Grid>


    )
}
export default TabCustomize;