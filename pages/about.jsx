import React from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';


export default function about() {
  return (
    <div>
      <Navbar />
      <div className="container">
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
            Je m&apos;applle <span>Edwin</span>, un développeur junior très interéssé par le front-end surtout par le coté créatif du front-end.
            Et c&apos;est justement ce coté créatif que j&apos;exploite de mon coté et que j&apos;aimerai exploité dans des projets enrichissants.
            En plus d&apos;étudier des langages du web je m&apos;intéresse de près a l&apos;UX design.
            Apprendre ne me fait pas peur, bien au contraire.
          </p>
        </div>
      </div>
    </div>
  )
}
