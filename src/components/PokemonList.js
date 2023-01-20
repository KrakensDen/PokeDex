import React from "react";
import PokemonCard from "./styled/blocks/PokemonCard/PokemonCard";
import { Grid } from "@nextui-org/react";

function compareNumbers(a, b) {
  return a.id - b.id;
}

function PokemonList({ pokemon }) {
  return (
    <div>
      <Grid.Container gap={1} justify="center">
        {pokemon.sort(compareNumbers).map((poke) => {
          return (
            <Grid key={poke.id}>
              <PokemonCard key={poke.id} pokemon={poke} />
            </Grid>
          );
        })}
      </Grid.Container>
    </div>
  );
}

export default PokemonList;
