import { createMuiTheme } from '@material-ui/core';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#18202C',
    },
  },
  typography: {
    fontFamily: ['EB Garamond', 'serif', 'sofia', 'cursive'].join(' '),
  },
});

export default theme;
