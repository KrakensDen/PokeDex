import React from "react";
import styles from "./header.module.css";
import Brand from "../../components/ui/Brand/Brand";
import Popover from "../../components/ui/Popover/Popover";

const Navbar = ({ title }) => {

  return (
    <nav className={styles.nav}>
      <Brand />
      <h1>{title}</h1>
      <div className={styles.popoverContainer}>
        <Popover />
      </div>
    </nav>
  );
};

export default Navbar;
