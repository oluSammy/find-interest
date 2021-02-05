import React from 'react'
import popularStyles from './Popular.styles';
import Typography from '@material-ui/core/Typography';
// import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import Grid from '@material-ui/core/Grid';
import PopularCard from './../PopularCard/PopularCard.component';
import musicImg from '../../assets/img/music.jpg'
import foodImg from '../../assets/img/food.jpg'
import fashionImg from '../../assets/img/fashion.jpg'
import natureImg from '../../assets/img/nature.jpg'
import politicsImg from '../../assets/img/politics.jpg'
import techImg from '../../assets/img/technology.jpg'
import sportsImg from '../../assets/img/sports.jpg'



const Popular = () => {
    const classes = popularStyles()
    const Interests = [
        {
            img: musicImg,
            interestedPeople: 1300,
            title: 'Music'
        },
        {
            img: fashionImg,
            interestedPeople: 3000,
            title: 'Fashion'
        },
        {
            img: techImg,
            interestedPeople: 30000,
            title: 'Technology'
        },
        {
            img: sportsImg,
            interestedPeople: 31200,
            title: 'Test'
        },
        {
            img: natureImg,
            interestedPeople: 1100,
            title: 'Nature'
        },
        {
            img: politicsImg,
            interestedPeople: 2400,
            title: 'Politics'
        },
        {
            img: sportsImg,
            interestedPeople: 900,
            title: 'Sports'
        },
        {
            img: foodImg,
            interestedPeople: 2300,
            title: 'Food & Drinks'
        },
    ]
    return (
        <div id="popular" className={classes.root}>
            <div className={classes.popularHeader}>
                {/* <AmpStoriesIcon color="primary" className={classes.popularIcon} /> */}
                <Typography className={classes.popularHeading} variant="h2" component="h2" gutterBottom>Popular Interests</Typography>
            </div>
            <Grid container spacing={3} >
                { Interests.map(el => <PopularCard key={el.title} card={el} />) }
            </Grid>
        </div>
    )
}

export default Popular
