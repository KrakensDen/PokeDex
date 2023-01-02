import React from 'react'
import styles from './hamburger.module.css'

const HamburgerBtn = () => {
  return (
    <div className={styles.hamburgerbtn}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  )
}

export default HamburgerBtn
