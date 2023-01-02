import React, { useState } from 'react'

function PokemonList({ pokemon }) {

  return (
    <div>
      {pokemon.map( (p) => {
        return (
          <p>{p}</p>
        )
      })}
    </div>
  )
}

export default PokemonList

