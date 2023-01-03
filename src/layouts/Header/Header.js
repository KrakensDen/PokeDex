import React from "react";
import styles from "./header.module.css";
import Brand from "../../components/ui/Brand/Brand";
import HamburgerBtn from "../../components/ui/HamburgerBtn/HamburgerBtn";
import { Popover, Button } from "@nextui-org/react";
import Link from "next/link";

const NAV_ITEMS = [
  {
    title: "Sign In",
    href: "/sign-in",
  },
  {
    title: "About",
    href: "/about",
  },
];

const Navbar = ({ title }) => {

  return (
    <nav className={styles.nav}>
      <Brand />
      <h1>{title}</h1>
      <div className={styles.popoverContainer}>
      <Popover placement="left-top">
        <Popover.Trigger>
          <Button light auto>
            <HamburgerBtn />
          </Button>
        </Popover.Trigger>
        <Popover.Content className={styles.popover}>
          <div className={styles.hamburgerpopover}>
          {NAV_ITEMS.map((item) => (
            <>
            <Link className={styles.popoverLink} key={item.title} href={item.href}>
              {item.title}
            </Link>
            </>
          ))}
          </div>
        </Popover.Content>
      </Popover>
      </div>
    </nav>
  );
};

export default Navbar;
