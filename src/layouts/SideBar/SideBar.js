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
    type: "Phychic",
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
      <h1>Filter</h1>
      <br />
      <hr />
      <br />
      <Collapse.Group>
      <Collapse className={styles.collapse} title="Types">
        {POKEMON_TYPES.map((type) => {
          return (
            <>
              <Link className={styles.link} href={"/PokemonList"} id={type.type}>
                {type.type}
              </Link><br />
            </>
          );
        })}
      </Collapse>
      <Collapse title='Temp'>
        <h4>Temp</h4>
        <h4>Temp</h4>
        <h4>Temp</h4>
        <h4>Temp</h4>
        <h4>Temp</h4>
        <h4>Temp</h4>
        <h4>Temp</h4>
        <h4>Temp</h4>
        <h4>Temp</h4>
      </Collapse>
      </Collapse.Group>
    </div>
  );
};

export default SideBar;
