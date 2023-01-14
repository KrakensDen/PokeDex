import React from "react";
import { Popover, Button } from "@nextui-org/react";
import HamburgerBtn from "../../ui/HamburgerBtn/HamburgerBtn";
import styles from "./popover.module.css";

import Link from "next/link";

const AppPopover = ({ items, session }) => {
  if (session) {
    items = [
      {
        title: "Logout",
        href: "/api/auth/signout",
      },
      {
        title: "Profile",
        href: "/profile",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Settings",
        href: "/settings",
      },
    ];
  }
  return (
    <div>
      <Popover placement="left-top">
        <Popover.Trigger>
          <Button light auto>
            <HamburgerBtn />
          </Button>
        </Popover.Trigger>
        <Popover.Content className={styles.popover}>
          <div className={styles.hamburgerpopover}>
            {items.map((item) => (
              <>
                <Link
                  className={styles.popoverLink}
                  key={item.title}
                  href={item.href}
                >
                  {item.title}
                </Link>
              </>
            ))}
          </div>
        </Popover.Content>
      </Popover>
    </div>
  );
};

AppPopover.defaultProps = {
  items: [
    {
      title: "Sign In",
      href: "/sign-in",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Settings",
      href: "/settings",
    },
  ],
};

export default AppPopover;
