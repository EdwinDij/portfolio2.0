import Link from 'next/link';
import Image from 'next/image';

export default function navbar() {


  return (
    <nav className='header'>
        <Link href='/'><a className='ed'>Ed</a></Link>
        <div className="nav-link">
            <Link href="/about"><a>À propos</a></Link>
            <Link href="/projects"><a>Mes projets</a></Link>
            <a href="/Edwin_Dijeont_CV.pdf" target="_blank" rel="noopener noreferrer">Cv</a>
            <Link href="/contact"><a>Contact</a></Link>
            <a href="https://github.com/EdwinDij" rel='noreferrer' target="_blank" title="Github profile" >
              <Image 
              src={"/github.png"}
              width={25} 
              height={25}
              alt="github icone"
              />
            </a>
            <a href="https://linkedin.com/in/edwin-dijeont-1469a0226" rel='noreferrer' target="_blank" title="Linkedin profile" >
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
