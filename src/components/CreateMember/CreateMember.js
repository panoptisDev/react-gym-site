import React from 'react'
import Button from '../../UI/Button/Button'
import './CreateMember.css'
const CreateMember = () => {
    return (
        <div className="CreateMember">
            <div className="child-member">
                <h1 className="member-header">
                    DON’T <span className="colored">THINK</span>, BEGIN <span className="colored">TODAY</span>!
                </h1>
                <p className="member-text">
                    Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.
                </p>
                <Button text="become a member" />
            </div>
        </div>
    )
}

export default CreateMember
