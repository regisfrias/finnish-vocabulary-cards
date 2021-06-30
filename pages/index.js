import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import data from '../data.json'

export default function Home() {
  const randomWord = () => {
    const listLength = Object.keys(data).length
    const randomIndex = Math.floor(Math.random() * listLength)
    const filterWord = Object.keys(data).filter( (d, i) => i === randomIndex)
    const randomWordIndex = filterWord[0]
    return data[randomWordIndex]
  }
  const [word, setWord] = useState(randomWord());

  const loadNewWord = () => setWord(randomWord())

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

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.front}>
              <p>{ word.fi }</p>
            </div>
            <div className={styles.back}>
              <p>{ word.pt }</p>
            </div>
          </div>
        </div>

        <p className={styles.description}>
          <button className={styles.big_button} onClick={() => loadNewWord()}>↺</button>
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://regisfrias.com">Régis Frias</a>
      </footer>
    </div>
  )
}
