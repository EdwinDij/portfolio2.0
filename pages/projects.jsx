import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function projects() {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, transition: 4, opacity: 1 }}
      exit={{ scale: 0.2, opacity: 0, transition: 5 }}>
      <h1 className='title-project'> Projets</h1>
      <div className="project-container">
        <div className="project">

          <div className="project-card">
            <div className="project-card-image">
              <Image className='img-project'
                src={"/reservia.png"}
                width={450}
                height={350}
                alt="reservia" />
                <div className="project-card-text">
                <h2 className="project-card-title">Reservia</h2>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </motion.div>

  )
}
