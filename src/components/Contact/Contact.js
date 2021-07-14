import React from 'react'
import Button from '../../UI/Button/Button'
import './Contact.css'

const Contact = () => {
    return (
        <div className="Contact" id="contact">
            <div className="map">
            </div>
            <div className="form-container">
                <form className="contact-form">
                    <div className="name-email">
                    <input className="name" type="text" placeholder="Your Name*" />
                    <input className="email" type="email" placeholder="Your Email*" />
                    </div>

                    <input className="subject" type="subject" placeholder="Subject" />
                    <textarea className="message" placeholder="Message"></textarea>
                    <Button className="send" text="send message" />
                </form>
            </div>
        </div>
    )
}

export default Contact
