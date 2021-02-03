import React from 'react';
import homeStyles from './home.styles';
import Navbar from './../../Components/Navbar/Navbar.component';

const Home = () => {
    const classes = homeStyles()
    return (
        <div className={classes.root}>
            <Navbar />
        </div>
    )
}

export default Home;
