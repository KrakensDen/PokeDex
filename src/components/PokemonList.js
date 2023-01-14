import React from "react";
import PokemonCard from "./styled/blocks/PokemonCard/PokemonCard";
import { Grid } from "@nextui-org/react";

function PokemonList({ pokemon }) {
  return (
    <div>
      <Grid.Container gap={1} justify="center">
        {pokemon.map(({ image, name }, index) => {
          return (
            <Grid key={index}>
              <PokemonCard key={name} title={name} image={image} />
            </Grid>
          );
        })}
      </Grid.Container>
    </div>
  );
}

export default PokemonList;
