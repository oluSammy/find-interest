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
  },
  title: {
    fontSize: '30px',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '10px',
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
}));

export default signupStyles;
