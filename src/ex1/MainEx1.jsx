import React from 'react';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TableOne from './TableOne';
import TresHold from './ThresHold';
import CustomizedTabs from './CustomizedTabs.js';
import BoxButtons from './BoxButtons';
import Graph from './Graph';
import TabCustomize from './TabCusomize';

const useStyles = makeStyles((theme) => ({
    '@global': {
        '*::-webkit-scrollbar': {
          width: '0.5em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': `inset 0 0 56px ${theme.palette.secondary.dark}`,
          borderRadius: 6
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: theme.palette.secondary.light,
        //   outline: `1px solid ${theme.palette.secondary.light}`,
          borderRadius: 3,
        }
    },
    
    root: {
        background: theme.palette.primary.dark
    },
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

const MainEx1 = () => {
    
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TabCustomize />
                    <TableOne />
                </Grid>
                <Grid item xs={4}>
                    <TabCustomize />
                    <TableOne />
                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Graph />
                        </Grid>
                        <Grid item xs={6}>
                            <Graph />
                        </Grid>
                        <Grid item xs={6}>
                            <Graph />
                        </Grid>
                        <Grid item xs={6}>
                            <Graph />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Grid container>
                        <div className={classes.divStyle}><span className={classes.spanStyle}>TRESHOLD: 10000</span></div>
                        <TresHold />
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <Grid container>
                            <Grid item xs={12} >
                                <BoxButtons />
                            </Grid>
                            <Grid item xs>
                                <br />
                                <BoxButtons />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Graph />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <CustomizedTabs />
                </Grid>
                <Grid item xs={6}>
                    <CustomizedTabs />
                </Grid>
            </Grid>
        </div>
    )
}

export default MainEx1;