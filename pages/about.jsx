import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

export default function about() {
  return (
    <motion.div
    initial={{y: 200, opacity:0.2}}
    animate={{y: 0, transition: 4, opacity:1}}

    
    >
      <div className="about-container">
        <div className="container-left container-size">
          <Image
          src="/me-memoji.png"
          alt="mon memoji"
          width={300}
          height={300}
          />
        </div>
        <div className="container-right container-size">
          <h1 className="about-title">
            À propos
          </h1>
          <Typewriter
          options={{
            autostart: true,
            loop: true,
            cursor: null
        }}
          onInit={(typewriter) => {
            typewriter.typeString('Développeur')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Front-end')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Full-Stack')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Créatif')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Curieux')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Gameur')
            .start()
          }}
          />
          <p className="presentation">
            Je m&apos;applle <span>Edwin</span>, un développeur junior très interéssé par le coté créatif et technique du front-end.<br></br>
            <br></br>
            C&apos;est justement ce coté créatif que j&apos;aimerai exploiter dans des projets enrichissants.
            En plus d&apos;étudier des langages du web, je m&apos;intéresse de près à l&apos;UX design.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
