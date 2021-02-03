import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import navStyles from './Navbar.styles';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import { Slide, useScrollTrigger } from "@material-ui/core";
import { grey } from '@material-ui/core/colors';



const HideOnScroll = ({ children }) => {
    const trigger = useScrollTrigger()
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    )
}


const Navbar = () => {
    const classes = navStyles();
    return (
        <HideOnScroll>
            <AppBar className={classes.appBarStyles}>
                <Toolbar className={classes.toolbarStyles}>
                    <div className={classes.titleBox}>
                        <h2 className={classes.logo}>LOGO</h2>
                        <Typography className={classes.title} variant="h1">FindInterest</Typography>
                    </div>
                    <form className={classes.searchForm}>
                        <input className={classes.search} type="search" name="search" id="search" placeholder="Search..."/>
                        <SearchIcon style={{ color: grey[600] }} className={`${classes.searchIcon} ${classes.navIcon}`}/>
                    </form>
                    <ul className={classes.navList}>
                        <li className={classes.navListItem}>
                            <Button className={classes.navBtn} startIcon={<ExitToAppIcon />}>Sign Up</Button>
                        </li>
                        <li className={classes.navListItem}>
                            <Button className={classes.navBtn} startIcon={<LockOpenIcon />}>Login</Button>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default Navbar
