import React from 'react'
import Navbar from '../components/navbar'
import Swal from 'sweetalert2'

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
        }).then ((res) => {
            console.log(res)
            if(res.status === 200) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Votre message a bien été envoyé !',
                    showConfirmButton: false,
                    timer: 2000
                  })
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Si ce message apparaît contactez-moi sur: edwin.d899@gmail.com.',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        
    }

    return (
        <div>
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
