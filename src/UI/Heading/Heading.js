import React from 'react'
import img from '../../images/line-dec.png'
import './Heading.css'
const Heading = (props)=> {
    return (
        <div className="ui-header">
                <h2 className={"ui-heading "+ (props.theme ==="dark"?"dark":'')}>{props.heading} <span className="colored">{props.colored}</span></h2>
                <img src={img} alt="wave"/>
                <p className={"ui-text " + (props.theme==="dark"?"dark":'')}>{props.text}</p>
            </div>
    )
}

export default Heading
