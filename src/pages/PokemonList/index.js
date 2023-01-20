import React, { useEffect, useState } from "react";
import PokemonList from "../../components/PokemonList";
import PokemonListLayout from "../../layouts/PokemonListLayout";
import axios from "axios";
import PokemonCard from "../../components/styled/blocks/PokemonCard/PokemonCard";

function PokemonListPage() {
  const pokemon = [
    {
      name: "bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      name: "charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      name: "charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      name: "charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      name: "charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
  ];

  // * Basic axios call to get the list of Pokémon
  const [p, setP] = useState([]);
  const [pokeData, setPokeData] = useState([]);

  //* Putting it in a use effect, so it lets the page load while it's grabbing the data
  useEffect(() => {
    //* Calling the pokeApi to get the first 20 Pokémon in the list.
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      res.data.results.forEach(async (el) => {
        //* Going in and Making another axios call to the individual Pokémon data and adding it to pokeData useState.
        await axios.get(el.url).then(async (res) => {
          await setPokeData((pData) => Array(res.data, ...pData));
        });
      });
      setP(res.data.results);
    });
  }, []);

  console.log(pokeData);
  //* Mapping the pokeData to its rightful spots for an example of how we would do it
  return (
    <div style={{ display: "flex", overflow: "autp" }}>
      {/*{pokeData.sort(compareNumbers).map((poke) => (*/}
      {/*  <PokemonCard pokemon={poke} />*/}
      {/*))}*/}
      <PokemonList pokemon={pokeData} />
    </div>
  );
}

PokemonListPage.getLayout = function getLayout(page) {
  return <PokemonListLayout title={"Pokemon List"}>{page}</PokemonListLayout>;
};

export default PokemonListPage;
