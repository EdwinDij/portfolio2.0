import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function projects() {
  return (
    <motion.div
    initial={{y:200, opacity:0}}
    animate={{y:0, transition:4, opacity:1}}
    exit={{scale:0.2, opacity:0, transition:5}}>
      <h1 className='title-project'> Projets</h1>
      <div className="project-container">
        <div className="project">
          <figure className="snip1504">
            <Image className='img-project'
              src={"/reservia.png"}
              width={260}
              height={260}
              alt="sample57" />
            <figcaption>
              <h3>Réservia</h3>
              <div className="flex-icon">
                <Image className='icon-project'
                  src={'/html.png'}
                  width={50}
                  height={50}
                  alt="icone tech"
                />
                <Image className='icon-project'
                  src={'/css.png'}
                  width={50}
                  height={50}
                  alt="icone tech"
                />
              </div>
            </figcaption>
            <a href="https://edwindij.github.io/version-avant-29-09-21-EdwinDijeont_2_31102021/" target="_blank" rel="noopener noreferrer"></a>
          </figure>

          <figure className="snip1504">
            <Image className='img-project'
              src={"/ohmyfood.png"}
              width={260}
              height={260}
              alt="sample57" />
            <figcaption>
              <h3>Ohmyfood</h3>
              <div className="flex-icon">
                <Image className='icon-project'
                  src={'/html.png'}
                  width={50}
                  height={50}
                  alt="icone tech"
                />
                <Image className='icon-project'
                  src={'/css.png'}
                  width={50}
                  height={50}
                  alt="icone tech"
                />
              </div>
            </figcaption>
            <a href="https://edwindij.github.io/EdwinDijeont_3_26112021/" target="_blank" rel="noopener noreferrer"></a>
          </figure>

          <figure className="snip1504">
            <Image className='img-project'
              src={"/kanap.png"}
              width={260}
              height={260}
              alt="sample57" />
            <figcaption>
              <h3>Kanap</h3>
              <div className="flex-icon">
                <Image className='icon-project'
                  src={'/javascript.png'}
                  width={50}
                  height={50}
                  alt="icone tech"
                />
              </div>
            </figcaption>
            <a href="https://github.com/EdwinDij/EdwinDijeont_5_13022022-" target="_blank" rel="noopener noreferrer"></a>
          </figure>

          <figure className="snip1504">
            <Image className='img-project'
              src={"/piquante.jpg"}
              width={260}
              height={260}
              alt="sample57" />
            <figcaption>
              <h3>Piiquante</h3>
              <div className="flex-icon">
                <Image className='icon-project'
                  src={'/javascript.png'}
                  width={50}
                  height={50}
                  alt="icone tech"
                />
                <Image className='icon-project'
                  src={'/nodejs.png'}
                  width={50}
                  height={50}
                  alt="icone tech"
                />
              </div>
            </figcaption>
            <a href="https://github.com/EdwinDij/EdwinDij-EdwinDijeont_6_03032022--" target="_blank" rel="noopener noreferrer"></a>
          </figure>

          <figure className="snip1504">
            <Image className='img-project'
              src={"/groupomania.png"}
              width={260}
              height={260}
              alt="sample57" />
            <figcaption>
              <h3>Groupomania</h3>
              <div className="flex-icon">
                <Image className='icon-project'
                  src={'/react.png'}
                  width={50}
                  height={50}
                  alt="icone tech"
                />
                <Image className='icon-project'
                  src={'/nodejs.png'}
                  width={50}
                  height={50}
                  alt="icone tech"
                />
                <Image className='icon-project'
                  src={'/mysql.png'}
                  width={50}
                  height={50}
                  alt="icone tech"
                />
              </div>
            </figcaption>
            <a href="https://github.com/EdwinDij/dijeont_edwin_n7_groupomania_020522" target="_blank" rel="noopener noreferrer"></a>
          </figure>

          <figure className="snip1504">
            <Image className='img-project'
              src={"/portfolio.png"}
              width={260}
              height={260}
              alt="sample57" />
            <figcaption>
              <h3 className='white'>Ce portfolio</h3>
              <Image className='icon-project'
                src={'/react.png'}
                width={50}
                height={50}
                alt="icone tech"
              />
              <h3 className='white'>NextJs</h3>
            </figcaption>
            <Link href="/"><a></a></Link>
          </figure>
        </div>
      </div>
    </motion.div>

  )
}
