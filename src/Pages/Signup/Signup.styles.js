import { makeStyles } from '@material-ui/core';

const signupStyles = makeStyles((theme) => ({
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
  gridContainer: {
    padding: '0px 100px',
    '@media (max-width: 1180px)': {
      padding: '0px 30px',
    },
    '@media (max-width: 768px)': {
      padding: '30px 30px',
    },
    '@media (max-width: 888px)': {
      padding: '30px 5px',
    },
  },
  signupImgContainer: {
    width: '100%',
    height: '80vh',
    margin: '0 auto',
  },
  signupImg: {
    height: '90%',
    paddingTop: '10%',
    width: '100%',
  },
  margin: {
    margin: theme.spacing(1),
  },
  label: {
    padding: '0 0 0 19px ',
    marginTop: '-8px',
  },
  signupBox: {
    width: '90%',
    margin: '0 auto',
    '@media (max-width: 888px)': {
      width: '100%',
    },
  },
  title: {
    fontSize: '30px',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      fontWeight: 600,
    },
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  formInputs: {
    display: 'flex',
    flexDirection: 'column',
  },
  formInput: {
    width: '70%',
    margin: '0 auto',
    marginBottom: '9px',
    '@media (max-width: 888px)': {
      width: '85%',
    },
  },
  already: {
    textAlign: 'center',
    marginBottom: '5px',
  },
  signupBtn: {
    padding: '8px 10px',
  },
  inputIcon: {
    fontSize: '15px',
    color: theme.palette.primary.main,
  },
  login: {
    marginLeft: '10px',
  },
}));

export default signupStyles;
