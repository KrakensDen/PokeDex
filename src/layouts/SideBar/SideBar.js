import React from 'react'
import styles from './sidebar.module.css'
import Link from 'next/link'

const POKEMON_TYPES = [
  {
    type: "Normal",
  },
  {
    type: "Fire",
  },
  {
    type: "Water",
  },
  {
    type: "Grass",
  },
  {
    type: "Electric",
  },
  {
    type: "Ice",
  },
  {
    type: "Fighting",
  },
  {
    type: "Poison",
  },
  {
    type: "Ground",
  },
  {
    type: "Flying",
  },
  {
    type: "Phychic",
  },
  {
    type: "Bug",
  },
  {
    type: "Rock",
  },
  {
    type: "Ghost",
  },
  {
    type: "Dark",
  },
  {
    type: "Dragon",
  },
  {
    type: "Steel",
  },
  {
    type: "Fairy",
  },
]

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <h1>Types</h1>
      <br />
      <hr />
      <br />
      {POKEMON_TYPES.map((type) => {
        return (
          <>
          <Link href={'/PokemonList'} id={type.type}>
            {type.type}
          </Link>
          <br/>
          </>
        )
      })}
    </div>
  )
}

export default SideBar
