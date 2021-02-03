import { makeStyles } from '@material-ui/core';

const homeStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    scrollBehavior: 'smooth',
  },
  space: {
    marginTop: '4rem',
    '@media (max-width: 600px)': {
      marginTop: '3.5rem',
    },
  },
}));

export default homeStyles;
