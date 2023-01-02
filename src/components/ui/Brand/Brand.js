import Image from 'next/image'
import React from 'react'
import styles from './brand.module.css'

const Brand = () => {
  return (
    <div className={styles.Brand}>
      <Image typeof='image' width={ 40} height={ 40 } src='/android-chrome-256x256.png' ></Image>
    </div>
  )
}

export default Brand
