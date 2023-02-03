import Button from "./../components/styled/elements/Button";
import NewPokeCard from "../components/__tests__/NewPokeCard";

export default function Home() {
  return (
    <main>
      <NewPokeCard />
      <Button color={"green"}>hello</Button>
      <Button color={"red"} href={"/PokeDex"}>
        Pokemon List
      </Button>
      <Button color={"yellow"} href={"/overview"}>
        Auth Testing
      </Button>
    </main>
  );
}
