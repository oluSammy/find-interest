import React from 'react'
import heroStyles from './Hero.styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { grey } from '@material-ui/core/colors';



const Hero = () => {
    const classes = heroStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="h1" component="h1">What's Interesting to you?</Typography>
            <Typography className={classes.subTitle} variant="h6" component="h6">Find it here!</Typography>
            <form className={classes.form}>
                <SearchIcon className={classes.searchIcon} style={{ color: grey[600] }} />
                <input className={classes.search} type="search" name="search" id="search" placeholder="Search over 1200 topics..."/>
                <Button type="submit" className={classes.searchBtn} variant="contained" color="primary">
                    Search
                </Button>
            </form>
            <div className={classes.btnContainer}>
                <Button className={classes.btn} variant="outlined" href="#popular"> Popular Interests </Button>
            </div>
        </div>
    )
}

export default Hero
