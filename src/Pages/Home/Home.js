import React from 'react';
import UseTitle from '../../TitleHook/TitleHook';
import Discussion from './Discussion';
import Gallery from './Gallery';
import HomeCard from './HomeCard';
import Slider from './Slider';

const Home = () => {
    // title set 
    UseTitle('Home ')
    return (
        <div className='container mx-auto'>
            <Slider></Slider>
            <HomeCard></HomeCard>
            <Discussion></Discussion>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;