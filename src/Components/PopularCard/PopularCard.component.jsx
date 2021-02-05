import React from 'react';
import Grid from '@material-ui/core/Grid';
import popularCardStyles from './PopularCard.styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';



const PopularCard = ({ card: { img, title, interestedPeople } }) => {
    const classes = popularCardStyles();
    return (
        <Grid  item xs={12} sm={6} md={3} >
            <Paper className={classes.root} elevation={0}>
                <figure className={classes.imgContainer}>
                    <img src={img} alt="card" className={classes.cardImg} />
                </figure>
                <IconButton aria-label="delete" color="primary" className={classes.iconBtn}>
                    <FavoriteBorderIcon className={classes.cardLike} />
                </IconButton>
                <div className={classes.cardBottom}>
                    <Typography variant="subtitle2" className={classes.people}> {`${interestedPeople} are interested in this`}</Typography>
                    <Typography variant="h5" className={classes.title}>{title}</Typography>
                </div>
            </Paper>
        </Grid>
    )
}

export default PopularCard;
