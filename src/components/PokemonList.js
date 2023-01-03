import React, { useState } from "react";
import PokemonCard from "./PokemonCard/PokemonCard";
import { Grid } from "@nextui-org/react";
import { Griffy } from "@next/font/google";

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
