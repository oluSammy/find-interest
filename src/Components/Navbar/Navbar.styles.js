import { makeStyles } from '@material-ui/core';

const navStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarStyles: {
    backgroundColor: '#1a237e',
    // opacity: '.8',
    color: theme.palette.common.white,
    boxShadow: 'none',
    // boxShadow: '0px 1px 3px 1px rgba(0,0,0,0.57)',
  },
  toolbarStyles: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 6vw 0 6vw',
    [theme.breakpoints.down('md')]: {
      padding: '0 4vw 0 4vw',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 2vw 0 2vw',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 1vw 0 1vw',
    },
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 758px)': {
      flexGrow: 1,
    },
  },
  logo: {
    marginRight: '4rem',
    fontSize: '1.4rem',
    fontWeight: 500,
    [theme.breakpoints.down('md')]: {
      marginRight: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: '.6rem',
      fontSize: '1.1rem',
    },
    '@media (max-width: 387px)': {
      fontSize: '.8rem'
    },
  },
  title: {
    fontSize: '1.7rem',
    fontWeight: 500,
    fontFamily: 'Sofia',
    marginRight: '3rem',
    color: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      marginRight: '1rem',
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.3rem',
      marginRight: 'auto',
    },
    '@media (max-width: 387px)': {
      fontSize: '.9rem'
    },
  },
  searchForm: {
    flexGrow: 1,
    marginLeft: '1rem',
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '50%',
      marginLeft: '4rem',
    },
    '@media (max-width: 758px)': {
      display: 'none',
    },
  },
  search: {
    width: '50%',
    padding: '.3rem 1rem .3rem 4rem',
    borderRadius: '1.2rem',
    marginLeft: '-3rem',
    transition: 'all .31s ease',
    color: theme.palette.grey[600],
    fontWeight: '400',
    fontSize: '1.3rem',
    fontFamily: 'EB Garamond',
    boxShadow: '0px 1px 11px 0px rgba(171,158,158,0.57)',
    border: 'none',
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
    '@media (max-width: 820px)': {
      width: '100%',
    },
    '&:focus': {
      width: '80%',
      outline: 'none',
      boxShadow: '0px 1px 11px 0px rgba(171,158,158,0.57)',
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
  searchIcon: {
    zIndex: 400,
  },
  icon: {
    color: '#000000',
  },
  navList: {
    display: 'flex',
    alignItems: 'center',
    listStyleType: 'none',
  },
  navListItem: {
    marginLeft: '.9rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: '.2rem',
    },
  },
  navIcon: {
    color: theme.palette.common.white,
  },
  navBtn: {
    color: theme.palette.common.white,
    whiteSpace: 'nowrap',
    fontSize: '1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '.71rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.61rem',
    },
  },
}));

export default navStyles;
