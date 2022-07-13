import React from 'react'
import Navbar from '../components/navbar'

export default function contact() {

    async function handleOnSubmit (e) {
        e.preventDefault()
        const formData ={}
        Array.from(e.currentTarget.elements).forEach(field => {
            if(!field.name) return;
            formData[field.name] = field.value
        });
        await fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(formData),
        })
        console.log(formData)
    }

    return (
        <div>
            <Navbar />
            <div className="contact-box">
                <h2 className='title-contact'>Contact</h2>
                <div className='form'>
                <form method='post' onSubmit={handleOnSubmit}>
                    <input name="name" type="text" className="feedback-input" placeholder="Name" />
                    <input name="email" type="text" className="feedback-input" placeholder="Email" />
                    <textarea name="message" className="feedback-input" placeholder="Message"></textarea>
                    <input type="submit" value="submit" />
                </form>
                </div>
            </div>

        </div>
    )
}
