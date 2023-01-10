import Head from 'next/head'
import Image from 'next/image'
import {MusicCard} from './../components/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>#BoraCodar | Music Player</title>
        <meta name="description" content="Music Player para o primeiro desafio do projeto Bora Codar da Rocketseat." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
     <main>
<MusicCard />
      </main>
    </>
  )
}
