import { makeStyles } from '@material-ui/core';

const popularCardStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    cursor: 'pointer',
    position: 'relative',

    '&:hover': {
      boxShadow: '0px 0px 5px 3px rgba(212,193,193,0.7)',
    },
  },
  imgContainer: {
    width: '100%',
    height: '150px',
    margin: '0 auto',
  },
  cardImg: {
    height: '100%',
    width: '100%',
    display: 'block',
    objectFit: 'cover',
  },
  iconBtn: {
    position: 'absolute',
    top: '130px',
    right: '10px',
    backgroundColor: theme.palette.grey[100],
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
  cardLike: {},
  cardBottom: {
    padding: '20px 10px 30px 10px',
  },
  people: {
    color: theme.palette.grey[600],
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    marginTop: '7px',
  },
}));

export default popularCardStyles;
