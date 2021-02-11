import { makeStyles } from '@material-ui/core';

const signInStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  space: {
    marginTop: '4rem',
    '@media (max-width: 600px)': {
      marginTop: '3.5rem',
    },
  },
  signInBox: {
    width: '60vw',
    margin: '120px auto',
    // backgroundColor: 'orangered',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '@media (max-width: 888px)': {
      width: '85vw',
    },
    '@media (max-width:614px)': {
      width: '100vw',
      margin: '80px auto',
    },
  },
  title: {
    fontSize: '40px',
    fontWeight: 700,
    color: theme.palette.primary.main,
    marginBottom: '10px',

    '@media (max-width:614px)': {
      fontSize: '30px',
    },
  },
  subTitle: {
    fontSize: '20px',
    color: theme.palette.primary.main,
    marginBottom: '10px',
    '@media (max-width:614px)': {
        fontSize: '15px',
      },
  },
  formInput: {
    width: '50%',
    margin: '0 auto',
    marginBottom: '13px',

    '@media (max-width:530px)': {
      width: '60%',
    },
    '@media (max-width:400px)': {
      width: '75%',
    },
  },
  login: {
    marginBottom: '10px',
    marginTop: '5px',
    color: theme.palette.grey[600],
  },
  label: {
    padding: '0 0 0 19px ',
    marginTop: '-8px',
  },
  signup: {
    marginLeft: '5px',
  },
  inputIcon: {
    fontSize: '15px',
    color: theme.palette.primary.main,
  },
}));

export default signInStyles;
