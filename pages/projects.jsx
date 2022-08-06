import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { projectItems } from './projectData'

export default function projects() {


  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, transition: 4, opacity: 1 }}
      exit={{ scale: 0.2, opacity: 0, transition: 5 }}>
      <h1 className='title-project'> Projets</h1>
      <div className="project-container">
        <div className="project">

          {projectItems.map((project, index) => {
            return (
              <div key={index} className="project-card">
                <div className="project-card-image">
                  <a href={project.link}  rel='noreferrer' target="_blank">
                  <Image src={project.image}
                    width={450}
                    height={350}
                    alt={project.alt}
                    className="img-project" />
                    <div className="project-card-text">
                      <h2 className="project-card-title">{project.title}</h2>
                      <div className='icons'>{project.icons}</div>
                    </div>
                    </a>
              </div>
                </div>
            )
          })}
          </div>
      </div>
    </motion.div>

  )
}
