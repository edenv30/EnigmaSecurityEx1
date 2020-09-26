import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import CssBaseline from '@material-ui/core/CssBaseline';

import  MainEx1 from './ex1/MainEx1';
 
// primary: {
//   light: blueGrey[400],
//   main: blueGrey[700],
//   dark: blueGrey[900]
// },
// secondary: {
// light: blueGrey[300],
// main: blueGrey[600],
// dark: blueGrey[800],
// },

const theme = createMuiTheme({
  palette: {
      primary: {
          light: blueGrey[400],
          main: blueGrey[700],
          dark: '#232b35'
      },
      secondary: {
        light: blueGrey[300],
        main: blueGrey[600],
        dark: blueGrey[800],
      },
      typography :{
        // Use the system font over Roboto.
        fontFamily: 'Avenir Next, Roboto,"Helvetica Neue",Arial,sans-serif',
        htmlFontSize: 10,
      },
  }
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainEx1 />
      </ThemeProvider>
    </div>
  );
}

export default App;
