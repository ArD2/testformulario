import Head from 'next/head'
import Link from 'next/link'

import Footer from '@components/Footer'

export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>Recepción</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Respuestas recibidas!</h1>
        <p>Gracias por tus respuestas, el profesor te hará saber tu calificación.</p>
      </main>

      <Footer />
    </div>
  )
}
