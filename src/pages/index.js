import Button from "./../components/styled/elements/Button";
import NewPokeCard from "../components/__tests__/NewPokeCard";

export default function Home() {
  return (
    <main>
      <NewPokeCard />
      <Button glow color={"green"}>
        hello
      </Button>
      <Button href={"/PokemonList"}>Pokemon List</Button>
      <Button href={"/overview"}>Auth Testing</Button>
    </main>
  );
}
