import React from 'react'
import './Program.css'
import Header from '../../UI/Heading/Heading'
import Card from './Card/Card'
const Program = () => {
    return (
        
        <div className="Program" id="about">
            <Header heading='choose' colored='program' text="Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website."/>
            <div className="container">
                <Card side="card-left" heading="Basic Fitness" content="Please do not re-distribute this template ZIP file on any template collection website. This is not allowed."/>
                <Card side="card-right" heading="New Gym Training" content="If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot."/>
                <Card side="card-left" heading="Basic Muscle Course" content="Credit goes to Pexels website for images and video background used in this HTML template."/>
                <Card side="card-right" heading="Advanced Muscle Course" content="You may want to browse through Digital Marketing or Corporate HTML CSS templates on our website."/>
                <Card side="card-left" heading="Yoga Training" content="This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections."/>
                <Card side="card-right" heading="Body Building Course" content="Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor."/>
            </div>
        </div>
    )
}

export default Program
