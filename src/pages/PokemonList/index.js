import React, { useState } from "react";
import PokemonList from "../../components/PokemonList";
import PokemonListLayout from "../../layouts/PokemonListLayout";


function PokemonListPage() {
  const [pokemon, setPokemon] = useState([
    {
      name: 'bulbasaur',
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",

    },
    {
      name: 'charmander',
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",

    },
    {
      name: 'charmander',
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",

    },
    {
      name: 'charmander',
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",

    },
    {
      name: 'charmander',
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",

    },
  ]);

  return (
    <div>
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

PokemonListPage.getLayout = function getLayout(page) {
  return (
    <PokemonListLayout title={"Pokemon List"}>
        {page}
    </PokemonListLayout>
  );
};

export default PokemonListPage;
