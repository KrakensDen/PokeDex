import React, { useEffect, useState } from "react";
import PokemonList from "../../components/PokemonList";
import PokemonListLayout from "../../layouts/PokemonListLayout";
import axios from "axios";
import PokemonCard from "../../components/styled/blocks/PokemonCard/PokemonCard";
import Button from "../../components/styled/elements/Button";

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
  const [pokeData, setPokeData] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  //* Putting it in a use effect, so it lets the page load while it's grabbing the data
  useEffect(() => {
    setPokeData([]);
    setLoading(true);
    //* Calling the pokeApi to get the first 20 Pokémon in the list.
    axios.get(currentPageUrl).then((res) => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPreviousPageUrl(res.data.previous);
      res.data.results.forEach(async (el) => {
        //* Going in and Making another axios call to the individual Pokémon data and adding it to pokeData useState.
        await axios.get(el.url).then(async (res) => {
          await setPokeData((pData) => Array(res.data, ...pData));
        });
      });
    });
  }, [currentPageUrl]);

  const onNextPageHandler = () => {
    setCurrentPageUrl(nextPageUrl);
  };
  const onPreviousPageHandler = () => {
    setCurrentPageUrl(previousPageUrl);
  };

  if (loading) return <h1>Loading...</h1>;

  //* Mapping the pokeData to its rightful spots for an example of how we would do i
  return (
    <div style={{ width: "100%" }}>
      {/*{pokeData.sort(compareNumbers).map((poke) => (*/}
      {/*  <PokemonCard pokemon={poke} />*/}
      {/*))}*/}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {previousPageUrl ? (
          <Button color={"#41a5ee"} onClick={onPreviousPageHandler}>
            ← Previous
          </Button>
        ) : (
          <div></div>
        )}

        {nextPageUrl ? (
          <Button color={"#41a5ee"} onClick={onNextPageHandler}>
            Next →
          </Button>
        ) : (
          <div></div>
        )}
      </div>

      <PokemonList pokemon={pokeData} />
    </div>
  );
}

PokemonListPage.getLayout = function getLayout(page) {
  return <PokemonListLayout title={"Pokemon List"}>{page}</PokemonListLayout>;
};

export default PokemonListPage;
