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
                <div className="getIn">
                    <Link href="/projects"><a className='getIn-text'> Jump in ! </a></Link>
                </div>
            </div>
        </div>
    )
}
