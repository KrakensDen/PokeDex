import React, { useState } from "react"
import PokemonList from "../../components/ui/PokemonList"

function PokemonListPage() {
  
  const [pokemon, setPokemon] = useState(['bulbasaur', 'charmander'])

  return (
    <div>
      <h1>Pokemon List</h1>
      <PokemonList pokemon={pokemon} />
    </div>
  )
}

export default PokemonListPage
