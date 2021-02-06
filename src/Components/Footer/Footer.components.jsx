import React from 'react'
import footerStyles from './footerStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const Footer = () => {
    const classes = footerStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="space-between" className={classes.footerTop}>
                <Grid xs={12} sm={6} md={3} item className={classes.titleContainer}>
                    <p>LOGO</p>
                    <Typography className={classes.footerTitle} variant="h1" component="h1">Find Interest</Typography>
                </Grid>
                <Grid xs={12} sm={6} md={6} container item  justify="space-evenly">
                    <Button className={classes.footerBtn}>Interests</Button>
                    <Button className={classes.footerBtn}>Sign up</Button>
                    <Button className={classes.footerBtn}>Login</Button>
                    <Button className={classes.footerBtn}>Lorem</Button>
                </Grid>
            </Grid>
            <Grid container   justify="space-between">
                <form className={classes.footerForm}>
                    <input className={classes.footerInput} type="search" name="footer-search" placeholder="Search..." />
                    <Button type="submit" className={classes.footerSubmit} variant="contained" color="primary">Search</Button>
                </form>
            </Grid>
            <div className={classes.socials}>
                <IconButton className={classes.socialsIconBtn}> <FacebookIcon className={classes.socialsBtn} /></IconButton>
                <IconButton className={classes.socialsIconBtn}> <TwitterIcon className={classes.socialsBtn} /></IconButton>
                <IconButton className={classes.socialsIconBtn}> <InstagramIcon className={classes.socialsBtn} /></IconButton>
            </div>
            <Typography className={classes.copyright} variant="subtitle2">&copy; 2021 FindInterest All Rights Reserved</Typography>
        </div>
    )
}

export default Footer
