import { Inter } from "@next/font/google";
import Link from "next/link";
import Button, {
  LoginButton,
} from "../components/styled-components/Button/Button";
import AuthForm from "../components/form/AuthForm/AuthForm";
import PokemonCard from "../components/PokemonCard/PokemonCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <PokemonCard title='Pikachu' image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"} />
      <Button>
        <Link href={"/PokemonList"}>Pokemon List</Link>
      </Button>
    </main>
  );
}
