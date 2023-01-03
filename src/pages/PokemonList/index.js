import React, { useState } from "react";
import PokemonList from "../../components/PokemonList";
import PokemonListLayout from "../../layouts/PokemonListLayout";


function PokemonListPage() {
  const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"]);

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
