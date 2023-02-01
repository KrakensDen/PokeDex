import React from "react";
import styles from "./sidebar.module.css";
import Link from "next/link";
import { Collapse } from "@nextui-org/react";
import pokeTypes from "./../../data/__test__/types.json";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <h1 align={"center"}>Filter</h1>
      <br />
      <hr />
      <br />
      <Collapse.Group>
        <Collapse title="Types">
          {Object.keys(Object(pokeTypes)).map((name, index) => {
            return (
              <div key={index}>
                <Link
                  className={styles.link}
                  href={"/PokemonList"}
                  id={name}
                  key={index}
                >
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </Link>
              </div>
            );
          })}
        </Collapse>
      </Collapse.Group>
    </div>
  );
};
export default SideBar;
