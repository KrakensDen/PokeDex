import Button from "../components/styled/elements/Button";
import PokemonCard from "../components/styled/blocks/PokemonCard/PokemonCard";
import { useState } from "react";
import pokemon from "./../components/__tests__/tapu-koko.json";

export default function Home() {
  const [active, setActive] = useState(false);

  const onClickCard = () => {
    setActive(!active);
  };
  return (
    <main>
      <PokemonCard onClick={onClickCard} active={active} />

      <Button href={"/PokemonList"}>Pokemon List</Button>
      <Button href={"/overview"}>Auth Testing</Button>
    </main>
  );
}
