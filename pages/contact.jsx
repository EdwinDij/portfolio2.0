import React from 'react'
import Navbar from '../components/navbar'

export default function contact() {
    return (
        <div>
            <Navbar />

            <div className="contact-box">
                <h2 className='title-contact'>Contact</h2>
                <div className='form'>
                <form>
                    <input name="name" type="text" className="feedback-input" placeholder="Name" />
                    <input name="email" type="text" className="feedback-input" placeholder="Email" />
                    <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
                    <input type="submit" value="submit" />
                </form>
                </div>
            </div>

        </div>
    )
}
