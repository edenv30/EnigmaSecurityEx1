import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { dataTableThree } from './data/tableThree';


const AntTabs = withStyles({
  root: {
    zIndex: 1,

  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    borderColor: '1px solid red',
    backgroundColor: '1px solid #263238',
    border: '1px solid #263238',
    top: "0px",
    buttom: "0px",
    height: 2

  },
})(Tabs);

const AntTab = withStyles((theme) => ({  
  root: {
    textTransform: 'none',
    minWidth: 32,
    backgroundColor: theme.palette.primary.main,
    fontSize: 10,
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: theme.palette.common.white,
      opacity: 1,
    },
    '&$selected': {
      color: theme.palette.common.white,
    },
    '&:focus': {
      color: theme.palette.common.white,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
    fontSize: 10,

  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

export default function CustomizedTabs() {

  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const [id, setID] = useState('');
  const [created, setCreated] = useState('');

  useEffect( () => {
    dataTableThree.map( (c, index) => {
      if(c.label === 'ID')
        setID(c.text)
      if(c.label === 'CREATED')
        setCreated(c.text)
      return c
  })
  },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const switch_value = (value) => {
    switch(value) {
      case 0:
        return id
      case 1:
        return created
      default:
        return null
    } 
  }

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="ID" />
          <AntTab label="CREATED" />
          <AntTab label="LAST OPENED" />
          <AntTab label="INSTRUMENT" />
          <AntTab label="QTY" />
          <AntTab label="BID" />
          <AntTab label="ASK" />
          <AntTab label="DELTA" />
          <AntTab label="MODEL VOL" />
          <AntTab label="STATUS" />
          <AntTab label="CLEARING" />
        </AntTabs>
        {
            <p>{switch_value(value)}</p>
        }
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}