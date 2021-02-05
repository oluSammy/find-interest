import { makeStyles } from '@material-ui/core';

const popularStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '100px 100px',
    backgroundColor: '#ffffff',
    '@media (max-width: 714px)': {
      padding: '70px 50px',
    },
    '@media (max-width: 350px)': {
      padding: '50px 30px',
    },
  },
  popularHeading: {
    color: theme.palette.grey[700],
    fontSize: '30px',
    fontWeight: 600,
    // color: theme.palette.primary.main,
  },
  popularIcon: {
    fontSize: '40px',
    marginRight: '20px',
  },
  popularHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
  },
}));

export default popularStyles;
