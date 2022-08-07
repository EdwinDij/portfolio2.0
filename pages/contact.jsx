import React from 'react'
import Swal from 'sweetalert2'
import { motion } from "framer-motion"
import { useState } from 'react'

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

     function handleOnSubmit(e) {
        e.preventDefault()

        const data = {
            name,
            email,
            message
        }

        if (name === '' || email === '' || message === '') {
                Swal.fire({
                    title: 'Error',
                    text: 'Veuillez remplir tous les champs',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            
        } else if (email.includes('@') === true && email.includes('.') === true && email.length > 5 && email.length < 100 && data.name !== "" && data.message !== ""){	
             fetch('/api/mail', {
                method: 'POST',
                body: JSON.stringify(data),
            })
            console.log(data)
            Swal.fire({
                title: 'Merci',
                text: 'Votre message a bien été envoyé !',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        } else {
            Swal.fire({
                title: 'Oops...',
                text: 'Une erreur est survenue',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }


return (
    <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, transition: 4, opacity: 1 }}
        exit={{ scale: 0.2, opacity: 0, transition: 5 }}>
        <div className="contact-box">
            <h2 className='title-contact'>Contact</h2>
            <div className='form'>
                <form method='post' onSubmit={handleOnSubmit}>
                    <input name="name" type="text" className="feedback-input" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input name="email" type="text" className="feedback-input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <textarea name="message" className="feedback-input" placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </div>

    </motion.div>
)
}
