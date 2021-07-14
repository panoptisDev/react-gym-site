import React,{useState} from 'react'
import './UICard.css'
import image1 from '../../images/first-trainer.jpg'
import image2 from '../../images/second-trainer.jpg'
import image3 from '../../images/third-trainer.jpg'
const UICard = (props) => {
    const [state,] = useState({
        first:image1,
        second:image2,
        third:image3,
    })
    return (
        <div className="ui-card">
            <img src={state[props.image]} className="trainer-pic" alt="trainer-pic"/>
            <span className="card-tag">{props.role}</span>
            <h4 className="card-heading">{props.name}</h4>
            <p className="card-content">Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>

        </div>
    )
}

export default UICard
