import React from "react";
import pokeTypes from "./__tests__/types.json";
import NewPokeCard from "./__tests__/NewPokeCard";

function compareNumbers(a, b) {
  return a.id - b.id;
}

function PokemonList({ pokemon, showAddTeamModal }) {
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
            return (
              <NewPokeCard
                color1={pokeTypes[`${poke.types[0].type.name}`].color}
                showAddTeamModal={showAddTeamModal}
                key={poke.id}
                pokemon={poke}
              />
            );
          })}
      </div>
    </div>
  );
}

export default PokemonList;
