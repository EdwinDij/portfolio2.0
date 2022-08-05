import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
const [about, setAbout] = useState(false);
const [contact, setContact] = useState(false);
const [projects, setProjects] = useState(false);
const [home, setHome] = useState(false);



const handleClick = (e) => {
  if (e.target.id === 'about') {
    setAbout(true);
    setContact(false);
    setProjects(false);
    setHome(false);
  }	else if (e.target.id === 'contact') {
    setAbout(false);
    setContact(true);
    setProjects(false);
    setHome(false);
  }
  else if (e.target.id === 'projects') {
    setAbout(false);
    setContact(false);
    setProjects(true);
    setHome(false);
  } else if (e.target.id === 'home') {
    setAbout(false);
    setContact(false);
    setProjects(false);
    setHome(false);
  }
}
  return (
    <nav className='header'>
      <Link href='/'><a className='ed'
      onClick={handleClick}
      id='home'
      >Ed</a></Link>
      <div className="nav-link">
        <Link href="/about">
          <a className='link-navbar' 
            id="about"
            onClick={handleClick}
            style={{
              color: about ? '#91C4F2' : ''
            }}
          >À propos</a></Link>
        <Link href="/projects"><a
          className='link-navbar'
          id='projects'
          onClick={handleClick}
          style={{
            color: projects ? '#91C4F2' : ''
          }}
        >Mes projets</a></Link>
        <a href="/Dijeont_CV.pdf" target="_blank" rel="noreferrer"
          className='link-navbar'>Cv</a>
        <Link href="/contact">
          <a className='link-navbar'
            id="contact"
            onClick={handleClick}
            style={{
              color: contact ? '#91C4F2' : ''
            }}
          >Contact</a></Link>
        <a href="https://github.com/EdwinDij" rel='noreferrer' target="_blank" title="Github profile" className='link-navbar'>
          <Image
            src={"/github.png"}
            width={25}
            height={25}
            alt="github icone"
          />
        </a>
        <a href="https://linkedin.com/in/edwin-dijeont-1469a0226" rel='noreferrer' target="_blank" title="Linkedin profile" className='link-navbar'>
          <Image
            src={"/linkedin.png"}
            width={25}
            height={25}
            alt="linkedin icone"
          />
        </a>
      </div>
    </nav>
  )
}
