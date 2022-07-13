import React from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image'

export default function projects() {
  return (
    <div>
      <Navbar />
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
            <a href="#"></a>
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
            <a href="#"></a>
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
            <a href="#"></a>
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
            <a href="#"></a>
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
            <a href="#"></a>
          </figure>

          <figure className="snip1504">
            <Image className='img-project'
              src={"/groupomania.png"}
              width={260}
              height={260}
              alt="sample57" />
            <figcaption>
              <h3>Ce portfolio</h3>
              <Image className='icon-project'
                src={'/react.png'}
                width={50}
                height={50}
                alt="icone tech"
              />
              <h3>NextJs</h3>
            </figcaption>
            <a href="#"></a>
          </figure>


        </div>
      </div>
    </div>

  )
}
