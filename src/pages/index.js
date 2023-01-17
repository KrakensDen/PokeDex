import Button from "../components/styled/elements/Button";
import PokemonCard from "../components/styled/blocks/PokemonCard/PokemonCard";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);

  const onClickCard = () => {
    setActive(!active);
  };
  return (
    <main>
      <PokemonCard
        onClick={onClickCard}
        active={active}
        title="Pikachu"
        type="Electric"
        image={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        }
      />

      <Button href={"/PokemonList"}>Pokemon List</Button>
      <Button href={"/overview"}>Auth Testing</Button>
    </main>
  );
}
