import React from 'react';
import homeStyles from './home.styles';
import Navbar from './../../Components/Navbar/Navbar.component';
import Hero from './../../Components/Hero/Hero.component';
import Popular from './../../Components/Popular/Popular.component';
import Footer from './../../Components/Footer/Footer.components';

const Home = () => {
    const classes = homeStyles()
    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.space} />
            <Hero />
            <Popular />
            <Footer />
        </div>
    )
}

export default Home;
