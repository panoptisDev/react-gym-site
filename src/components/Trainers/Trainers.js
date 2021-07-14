import React from 'react'
import Header from '../../UI/Heading/Heading'
import UICard from '../../UI/UICard/UICard'
import './Trainers.css'
const Trainers=()=> {
    return (
        <div className="Trainers">
            <Header heading="expert" colored="trainers" text="Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu."/>
            <div className="trainer-cards">
                <UICard image="first" role="Strength Trainer" name="Bret D. Bowers"/>
                <UICard image="second" role="Muscle Trainer" name="Hector T. Daigl"/>
                <UICard image="third" role="Power Trainer" name="Paul D. Newman" />
            </div>
        </div>
    )
}

export default Trainers
