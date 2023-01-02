import React from "react";
import styles from "./nav.module.css";
import Brand from "../../components/ui/Brand/Brand";
import HamburgerBtn from "../../components/ui/HamburgerBtn/HamburgerBtn";
import { Popover, Button } from "@nextui-org/react";

const Navbar = () => {

  return (
    <nav className={styles.nav}>
      <Brand />
      <Popover placement="left-top">
        <Popover.Trigger>
          <Button light auto>
            <HamburgerBtn />
          </Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className={styles.hamburgerpopover}>Hello</div>
        </Popover.Content>
      </Popover>
    </nav>
  );
};

export default Navbar;
