import Head from 'next/head'
import HelloWorld from "../components/helloworld"

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Edwin Dijeont</title>
      </Head>
      <div>
        <HelloWorld />
      </div>
    </>
  )
}
