import Image from 'next/image'
import React from 'react'
import styles from './card.module.css'

const PokemonCard = ({title, image}) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <Image height={120} width={ 120 } src={image}/>
    </div>
  )
}

export default PokemonCard
