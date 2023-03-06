import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import data from '../data.json'
import { shuffle, filter } from '../js/utils'
import Card from '../components/Card'

export default function Home() {
  const [words, setData] = useState(null)

  useEffect(() => setData(shuffle(filter(data))), [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Finnish learning cards</title>
        <meta name="description" content="Finnish learning cards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>Finnish learning cards</h1>
        </div>

        {words && <Card words={words} onFinnish={() => setData(shuffle(filter(data)))} />}
      </main>

      <footer className={styles.footer}>
        <a href="https://regisfrias.com">Régis Frias</a>
      </footer>
    </div>
  )
}
