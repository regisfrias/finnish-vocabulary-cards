import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Card({words}) {
  const [index, setIndex] = useState(0)
  const word = words[index]

  const nextIndex = (index) => {
    const newIndex = index < (Object.keys(words).length - 1) ? index + 1 : 0
    setIndex(newIndex)
  }

  const [flipClass, setFlipClass] = useState(false)

  return (
    <>
      <div className={styles.grid}>
        <div className={styles.card + ' ' + (flipClass ? styles.flip : '')} onClick={() => setFlipClass(!flipClass)}>
          <div className={styles.front}>
            <p>🇫🇮</p>
            <p>{ word.fi }</p>
          </div>
          <div className={styles.back}>
            <p>🇧🇷</p>
            <p>{ word.pt }</p>
          </div>
        </div>
      </div>

      <p className={styles.description}>
        <button className={styles.big_button} onClick={() => nextIndex(index)}>↺</button>
      </p>
    </>
  )
}
