import React from "react";
import styles from "./navbar.module.css";
import Brand from "../../components/ui/Brand/Brand";
import Popover from "../../components/ui/Popover/Popover";

const Navbar = ({ title }) => {
  return (
    <nav className={styles.nav}>
      <Brand />
      <h1>{title}</h1>
      <div>
        <Popover />
      </div>
    </nav>
  );
};

export default Navbar;
