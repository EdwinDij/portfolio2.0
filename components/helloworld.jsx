import Link from 'next/link';

export default function helloworld() {
    return (
        <div className='helloworld'>
            <div className="title-zone">
                <h1 className="hook">
                    <span className='letter-color'>D</span>évelopper, 
                    <span className='letter-color'> I</span>ntégrer, 
                    <span className='letter-color'> C</span>oncevoir, <br></br> 
                    <span className='letter-color'> A</span>méliorer.
                </h1>
                <Link href="/projects">
                <div className="getIn">
                    <a className='getIn-text'> Jump in ! </a>
                </div>
                </Link>
            </div>
        </div>
    )
}
