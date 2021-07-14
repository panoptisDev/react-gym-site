import React from 'react'
import './HeroArea.css'
import Button from '../../../UI/Button/Button'
const HeroArea = ()=>{
    return (
        <div className="HeroArea">
            <h6 className="hero-title">WORK HARDER, GET STRONGER</h6>
            <h1 className="hero-header">EASY WITH OUR <span className="colored">GYM</span></h1>
            <Button text="become a member"/>
        </div>
    )
}

export default HeroArea
