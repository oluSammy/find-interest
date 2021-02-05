import React from 'react';
import homeStyles from './home.styles';
import Navbar from './../../Components/Navbar/Navbar.component';
import Hero from './../../Components/Hero/Hero.component';
import Popular from './../../Components/Popular/Popular.component';

const Home = () => {
    const classes = homeStyles()
    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.space} />
            <Hero />
            <Popular />
        </div>
    )
}

export default Home;
