import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SyncAltSharpIcon from '@material-ui/icons/SyncAltSharp';
import InputField from './InputField';
import Button from '@material-ui/core/Button';
import TelegramIcon from '@material-ui/icons/Telegram';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(1),
        margin: 'auto',
        maxWidth: 500,
        background: theme.palette.secondary.dark,
        color: theme.palette.primary.light,
    },

    header: {
        background:theme.palette.secondary.main,
        color: theme.palette.common.white,
        lineHeight: "normal",
        fontSize: 10,
        textAlign: "left",        
        verticalAlign: 'middle',
        // maxWidth: "200",
    },
    spanText: {
        // marginLeft: theme.spacing(0.5),
        marginBottom: theme.spacing(2),
    },
    middleLine: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            minHeight: 5,
            maxWidth: '50%', 
            margin : 3,
        },
        [theme.breakpoints.up('md')]: {
            minHeight: 5,
            maxWidth: '40%', 
            margin : 3,
        },
        [theme.breakpoints.up('lg')]: {
            minHeight: 5,
            maxWidth: '30%', 
            margin : 3,
        },
    },
    middleGrid: {
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
    }
   
  }));
//   style={{ minHeight: '10vh', maxWidth: '100%' }}

const BoxButtons = () => {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <div className={classes.header}>
                            <SyncAltSharpIcon />
                            <span className={classes.spanText}>BTC-USD</span>
                        </div>
                    </Grid>
                    <Grid
                        container
                        className={classes.middleGrid}
                    >
                        <Grid item xs={5} className={classes.middleLine}>
                            <Button size="small" 
                                    style={{
                                        borderRadius: 5,
                                        backgroundColor: "rgb(208, 41, 61)",
                                        padding: "4px 12px",
                                        fontSize: "10px",
                                        color: "white"
                                    }}
                                    variant="contained"
                            >
                                <Grid container>
                                        <Grid item xs={4}><TelegramIcon fontSize="inherit"/></Grid>
                                        <Grid item xs ={8}><div>9562.47<br />Sell</div></Grid>
                                </Grid>
                            </Button>
                        </Grid>
                        <Grid item xs={2} align="center" className={classes.middleLine}>
                            <span style={{ fontSize: "10px", textAlign: "center", marginLeft: "4px" }}>18.5</span>
                        </Grid>
                        <Grid item xs={5} className={classes.middleLine}>
                            <Button size="small" 
                                    style={{
                                        borderRadius: 5,
                                        backgroundColor: "rgb(41, 170, 41)",
                                        padding: "4px 12px",
                                        fontSize: "10px",
                                        color: "white"
                                    }}
                                    variant="contained"
                            >
                            <Grid container>
                                <Grid item xs={4}><TelegramIcon fontSize="inherit" /></Grid>    
                                <Grid item xs ={8}><div>9580.52<br />Buy</div></Grid>
                            </Grid>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <InputField textId="#field1" textField="1.25"/>
                    </Grid>
                    <Grid item xs={4}>
                        <InputField textId="field2" textField="MKT"/>
                    </Grid>
                    <Grid item xs={4}>
                        <InputField textId="field3" textField="Slippage"/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default BoxButtons;