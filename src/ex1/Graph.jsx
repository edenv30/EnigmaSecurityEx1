import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    LineSeries,
    AreaSeries,
  } from '@devexpress/dx-react-chart-material-ui';
  import { ValueScale } from '@devexpress/dx-react-chart';
  // import { scaleLog, scaleTime } from 'd3-scale'; ArgumentScale,

  const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: 'auto',
        maxWidth: 500,
        maxHeight: 175,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.light,
        
    },
    header: {
        backgroundColor: theme.palette.secondary.main,
        lineHeight: "normal",
        fontSize: 10,
        textAlign: "left",        
        verticalAlign: 'middle',
        borderBottom: `1px solid ${theme.palette.primary.light}`,      

    },
    spanText: {
        marginBottom: theme.spacing(2),
    },
    tab: {
        minWidth: 20, 
        width: 20, 
        minHeight: 10,
        height: 10,
        fontSize: 10,

    },
    tabs: {
     
        minHeight: 10,
        height: 10,
        
    },
    chartStyle: {
      color: theme.palette.primary.light,
     
    }
  }));

  const data = [
    { argument: '15:15' , value: 11.640 },
    { argument: '15:30' , value: 11.640 },
    { argument: '15:45' , value: 11.690 },
    { argument: '16:00' , value: 11.700 },
     
  ];

  // const data = [
  //   { argument: '15:15' , value: 11.600 },
  //   { argument: '15:30' , value: 11.650 },
  //   { argument: '15:45' , value: 11.700 },
  //   { argument: '16:00' , value: 11.750 },
    
  // ];

const modifyDomain = () => [11.600, 11.750];

const Graph = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                     <div className={classes.header}>
                        <span className={classes.spanText}>BTC-USD-CME</span>
                        <Tabs  
                          value={value}
                          onChange={handleChange}
                          indicatorColor="primary"
                          textColor="primary"
                          centered={true}
                          className={classes.tabs}
                        >
                          <Tab className={classes.tab} label="1H" />
                          <Tab className={classes.tab} label="1D" />
                          <Tab className={classes.tab} label="1W" />
                          <Tab className={classes.tab} label="1M" />
                        </Tabs>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Chart
                      className={classes.chartStyle}
                      data={data}
                      style={{maxHeight: 145}}
                    >
                        <ValueScale modifyDomain={modifyDomain} />

                        <ArgumentAxis />
                        <ValueAxis />
                        
                        <LineSeries name="line" valueField="value" argumentField="argument"  />
                        <AreaSeries color="#154b84" name="area" valueField="value" argumentField="argument" />

                    </Chart>
                </Grid>
            </Grid>
      </Paper>
    )
  }
  
  export default Graph;

