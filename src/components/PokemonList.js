import React from "react";
import PokemonCard from "./styled/blocks/PokemonCard/PokemonCard";
import { Grid } from "@nextui-org/react";

function PokemonList({ pokemon }) {
  return (
    <div>
      <Grid.Container gap={0.1} justify="center">
        {pokemon.map((p) => {
          return (
            <Grid>
              <PokemonCard title={p.name} image={p.image} />
            </Grid>
          );
        })}
      </Grid.Container>
    </div>
  );
}

export default PokemonList;
