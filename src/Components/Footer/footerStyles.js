import { makeStyles } from '@material-ui/core';

const footerStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: ' #000033',
    minHeight: '50vh',
    padding: '50px 100px',
    color: theme.palette.common.white,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoContainer: {},
  footerTop: {
    marginBottom: '100px',
  },
  footerLogo: {
    // height: '100%',
    // width: '100%',
    // display: 'block',
    // objectFit: 'cover',
  },
  footerTitle: {
    fontSize: '20px',
    fontWeight: 500,
    fontFamily: 'Sofia',
    marginLeft: '20px',
  },
  footerBtn: {
    color: theme.palette.common.white,
  },
  footerForm: {
    width: '90%',
    margin: '0 auto',
    marginBottom: '50px',
    display: 'flex',
    alignItems: 'center',
  },
  footerInput: {
    width: '90%',
    padding: '9px 20px',
    borderRadius: '40px',
    transition: 'all .31s ease',
    color: theme.palette.grey[600],
    fontWeight: '400',
    fontSize: '1.3rem',
    fontFamily: 'EB Garamond',
    '&:focus': {
      outline: 'none',
      border: 'none',
      '@media (max-width: 820px)': {
        width: '100%',
      },
    },
    '&::placeholder': {
      fontSize: '1.1rem',
      fontWeight: '300',
      fontFamily: 'EB Garamond',
      color: theme.palette.grey[600],
    },
  },
  footerSubmit: {
    padding: '12px 35px',
    marginLeft: '-40px',
    borderRadius: '0 32px 32px 0',
  },
  socials: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  socialsIconBtn: {
    // backgroundColor: '#00001a',
    // border: `1px solid ${theme.palette.grey[400]}`,
    marginRight: '5px',
  },
  socialsBtn: {
    color: theme.palette.common.white,
  },
  copyright: {
    textAlign: 'center',
    fontFamily: 'EB Garamond',
    marginTop: '30px',
  },
}));

export default footerStyles;
