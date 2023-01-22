import React from "react";
import PokemonCard from "./styled/blocks/PokemonCard/PokemonCard";
import { Grid } from "@nextui-org/react";
import NewPokeCard from "./__tests__/NewPokeCard";

function compareNumbers(a, b) {
  return a.id - b.id;
}

function PokemonList({ pokemon }) {
  return (
    <div>
      <div
        style={{
          display: "grid",
          zIndex: 1,
          gridTemplateColumns: "repeat( auto-fit, minmax(170px, 1fr)",
          justifyItems: "center",
          gap: 10 + "px",
        }}
      >
        {pokemon
          .sort(compareNumbers)
          .filter((item, index, arr) => arr.indexOf(item) === index)
          .map((poke) => {
            return <NewPokeCard key={poke.id} pokemon={poke} />;
          })}
      </div>
    </div>
  );
}

export default PokemonList;
