import React,{useState} from 'react'
import Button from '../../../UI/Button/Button'
import './ClassesInfo.css'
import first from '../../../images/training-image-01.jpg'
import second from '../../../images/training-image-02.jpg'
import third from '../../../images/training-image-03.jpg'
import fourth from '../../../images/training-image-04.jpg'
const ClassesInfo = (props)=> {
    const [state, ] = useState({
        first:first,
        second:second,
        third:third,
        fourth:fourth
    })
    return (
        <div className="ClassesInfo">
            <img className="info-image" src={state[props.image]} alt="demo"/>
            <h2 className="info-heading">{props.heading}</h2>
            <p className="info-text">{props.text}</p>
            <Button text="view schedule"/>
        </div>
    )
}

export default ClassesInfo
