import React from "react";
import { Popover, Button } from "@nextui-org/react";
import HamburgerBtn from "../../ui/HamburgerBtn/HamburgerBtn";
import styles from "./popover.module.css";

import Link from "next/link";
import {
  AiOutlineInfo,
  AiOutlineLogout,
  AiOutlineSetting,
} from "react-icons/ai";

const AppPopover = ({ items, session }) => {
  if (session) {
    items = [
      {
        image: (
          <img
            style={{ borderRadius: 5 + "px" }}
            height={20}
            width={20}
            src={session.user.image}
            alt={`${session.user.name} pic`}
          />
        ),
        title: "Profile",
        href: "/profile",
      },
      {
        image: <AiOutlineInfo />,
        title: "About",
        href: "/about",
      },
      {
        image: <AiOutlineSetting />,
        title: "Settings",
        href: "/settings",
      },
      {
        image: <AiOutlineLogout />,
        title: "Logout",
        href: "/api/auth/signout",
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
                  style={{ display: "flex", justifyContent: "space-around" }}
                  className={styles.popoverLink}
                  key={item.title}
                  href={item.href}
                >
                  {item.image}
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
