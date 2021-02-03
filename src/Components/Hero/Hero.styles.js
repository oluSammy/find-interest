import { makeStyles } from '@material-ui/core';
import heroImg from '../../assets/img/hero.jpg';

const heroStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `linear-gradient(rgba(10, 13, 15, 0.433), rgba(9, 11, 14, 0.495)),url(${heroImg})`,
    minHeight: '90vh',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: theme.palette.common.white,
    fontSize: '45px',
    marginBottom: '15px',
    '@media (max-width: 758px)': {
      fontSize: '30px',
    },
    '@media (max-width: 580px)': {
      fontSize: '20px',
    },
  },
  subTitle: {
    color: theme.palette.common.white,
    fontSize: '30px',
    marginBottom: '20px',
    '@media (max-width: 758px)': {
      fontSize: '20px',
    },
    '@media (max-width: 580px)': {
      fontSize: '15px',
    },
  },
  form: {
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40px',
  },
  search: {
    flexBasis: '70%',
    padding: '10px 50px',
    borderRadius: '8px',
    fontWeight: '400',
    fontSize: '1.3rem',
    fontFamily: 'EB Garamond',
    boxShadow: '0px 1px 11px 0px rgba(171,158,158,0.57)',
    border: 'none',
    '@media (max-width: 758px)': {
      padding: '7px 40px',
    },
    '@media (max-width: 580px)': {
      padding: '4px 30px',
      borderRadius: '5px',
    },
    '@media (max-width: 392px)': {
      padding: '2px 25px',
      flexBasis: '60%',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: '0px 1px 11px 0px rgba(171,158,158,0.57)',
      border: 'none',
    },
    '&::placeholder': {
      fontSize: '1.1rem',
      fontWeight: '300',
      fontFamily: 'EB Garamond',
      color: theme.palette.grey[600],
      '@media (max-width: 580px)': {
        fontSize: '.8rem',
      },
    },
  },
  searchBtn: {
    padding: '12px 40px',
    borderRadius: '8px',
    marginLeft: '-105px',
    // boxShadow: 'none',
    '@media (max-width: 758px)': {
      padding: '9px 30px',
    },
    '@media (max-width: 580px)': {
      padding: '6px 30px',
      borderRadius: '5px',
    },
    '@media (max-width: 392px)': {
      padding: '3.5px 18px',
      marginLeft: '-90px',
    },
  },
  searchIcon: {
    marginRight: '-30px',
    // fontSize: '4rem',
    zIndex: '12',
    '@media (max-width: 392px)': {
      marginRight: '-23px',
      fontSize: '15px',
      marginTop: '6px',
    },
  },
  btn: {
    borderColor: theme.palette.common.white,
    color: theme.palette.common.white,
    border: '1px solid',
    marginTop: '20px',
    '@media (max-width: 392px)': {
      marginTop: '55px',
      padding: '7px 5px',
      fontSize: '10px',
    },
  },
}));

export default heroStyles;
