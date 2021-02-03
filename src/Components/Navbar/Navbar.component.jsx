import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import navStyles from './Navbar.styles';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';



const Navbar = () => {
    const classes = navStyles()
    return (
        <AppBar className={classes.appBarStyles} position="fixed">
            <Toolbar className={classes.toolbarStyles}>
                <div className={classes.titleBox}>
                    <h2 className={classes.logo}>LOGO</h2>
                    <Typography className={classes.title} variant="h1">FindInterest</Typography>
                </div>
                <form className={classes.searchForm}>
                    <input className={classes.search} type="search" name="search" id="search" placeholder="Search..."/>
                    <SearchIcon className={`${classes.searchIcon} ${classes.navIcon}`}/>
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
    )
}

export default Navbar
