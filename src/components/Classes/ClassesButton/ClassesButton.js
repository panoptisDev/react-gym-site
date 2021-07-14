import React from 'react'
import './ClassesButton.css'
import img from '../../../images/tabs-first-icon.png'
const ClassesButton = (props) =>{

    return (
        <button className={"special-button " + props.active} onClick={props.changeContent}><img src={img} alt="demo"/>{props.text}</button>
    )
}

export default ClassesButton
