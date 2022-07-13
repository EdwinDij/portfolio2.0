import Link from 'next/link'

export default function navbar() {
  return (
    <div className='header'>
        <nav>
        <Link href='/'><a className='ed'>Ed</a></Link>
        <div className="nav-link">
            <Link href="/about"><a>À propos</a></Link>
            <Link href="/projects"><a>Mes projects</a></Link>
            <a href="#">Mon Cv</a>
            <a href="https://github.com/EdwinDij" rel='noreferrer' target="_blank" title="Github profile" >b</a>
            <a href="https://linkedin.com/in/edwin-dijeont-1469a0226" rel='noreferrer' target="_blank" title="Linkedin profile" >a</a>
        </div>
        </nav>
    </div>
  )
}
