import React from 'react';
import homeStyles from './home.styles';
import Navbar from './../../Components/Navbar/Navbar.component';
import Hero from './../../Components/Hero/Hero.component';

const Home = () => {
    const classes = homeStyles()
    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.space} />
            <Hero />
        </div>
    )
}

export default Home;
