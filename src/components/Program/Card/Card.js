import React from 'react'
import './Card.css'
import img from '../../../images/features-first-icon.png'
const Card = (props) => {
    return (
        <div className={"card " + props.side}>
            <img src={img} alt="dumble" id="dumble"/>
            <div className="card-content">
                <h2 className="programcard-heading">{props.heading}</h2>
                <p className="sub-text">{props.content}</p>
                <a href="/" className="colored discover">DISCOVER MORE</a>
            </div>
        </div>
    )
}

export default Card
