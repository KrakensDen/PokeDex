import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import Button, {
  LoginButton,
} from "../components/styled-components/Button/Button";
import Navbar from "../components/ui/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Poke-Dex</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <main>
        <Navbar></Navbar>

        {/* 
        Example of a styled Component  
          <LoginButton>Button</LoginButton> 
        Login Button found in the components/styled-components/Button/Button.styles.js file 
        */}

        <Button>
          <Link href={"/PokemonList"}>Pokemon List</Link>
        </Button>
      </main>
    </>
  );
}
