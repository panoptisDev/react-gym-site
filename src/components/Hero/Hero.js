import React from 'react'
import './Hero.css'
import Navigation from './Navigation/Navigation'
import video from '../../images/gym-video.mp4'
import HeroArea from './HeroArea/HeroArea'

const Hero =()=> {
    return (
        <>
        <video autoPlay muted loop id="bg-video">
            <source src={video} type="video/mp4"/>
        </video>
        <div className="Hero">
            <Navigation/>
            <HeroArea/>
        </div>
        </>
    )
}

export default Hero
