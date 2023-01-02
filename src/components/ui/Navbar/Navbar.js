import React from 'react'
import styles from './nav.module.css'
import Brand from '../Brand/Brand'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Brand />
    </nav>
  )
}

export default Navbar
