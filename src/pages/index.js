import { Inter } from "@next/font/google";
import Link from "next/link";
import Button, {
  LoginButton,
} from "../components/styled-components/Button/Button";
import AuthForm from "../components/form/AuthForm/AuthForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/*
        Example of a styled Component  
          <LoginButton>Button</LoginButton> 
        Login Button found in the components/styled-components/Button/Button.styles.js file 
      */}
      <Button>
        <Link href={"/PokemonList"}>Pokemon List</Link>
      </Button>
    </main>
  );
}
