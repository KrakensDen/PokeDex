import React from "react";
import styles from "./sidebar.module.css";
import Link from "next/link";
import { Collapse } from "@nextui-org/react";

const POKEMON_TYPES = [
  {
    type: "Normal",
  },
  {
    type: "Fire",
  },
  {
    type: "Water",
  },
  {
    type: "Grass",
  },
  {
    type: "Electric",
  },
  {
    type: "Ice",
  },
  {
    type: "Fighting",
  },
  {
    type: "Poison",
  },
  {
    type: "Ground",
  },
  {
    type: "Flying",
  },
  {
    type: "Psychic",
  },
  {
    type: "Bug",
  },
  {
    type: "Rock",
  },
  {
    type: "Ghost",
  },
  {
    type: "Dark",
  },
  {
    type: "Dragon",
  },
  {
    type: "Steel",
  },
  {
    type: "Fairy",
  },
];

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <h1 align={"center"}>Filter</h1>
      <br />
      <hr />
      <br />
      <Collapse.Group>
        <Collapse title="Types">
          {POKEMON_TYPES.map(({ type }, index) => {
            return (
              <>
                <Link
                  className={styles.link}
                  href={"/PokemonList"}
                  id={type}
                  key={index}
                >
                  {type}
                </Link>
                <br />
              </>
            );
          })}
        </Collapse>
      </Collapse.Group>
    </div>
  );
};

export default SideBar;
