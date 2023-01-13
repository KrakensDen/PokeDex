import Link from "next/link";
import Button from "../components/styled/elements/Button";
import PokemonCard from "../components/styled/blocks/PokemonCard/PokemonCard";

export default function Home() {
  return (
    <main>
      <PokemonCard
        title="Pikachu"
        image={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        }
      />

      <Button href={"/PokemonList"}>Pokemon List</Button>
    </main>
  );
}
