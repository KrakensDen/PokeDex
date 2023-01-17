import React, { useState } from "react";
import { Popover, Button } from "@nextui-org/react";
import HamburgerBtn from "../../ui/HamburgerBtn/HamburgerBtn";
import styles from "./popover.module.css";

import Link from "next/link";
import {
  AiOutlineInfo,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineSetting,
} from "react-icons/ai";
import Image from "next/image";

const AppPopover = ({ items, session }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (session) {
    items = [
      {
        image: session.user.image ? (
          <Image
            style={{ borderRadius: 5 + "px" }}
            height={20}
            width={20}
            src={session.user.image ?? ""}
            alt={`${session.user.name ?? "Profile"} pic`}
          />
        ) : (
          ""
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
      <Popover isOpen={isOpen} onOpenChange={setIsOpen} placement="left-top">
        <Popover.Trigger>
          <Button light auto>
            <HamburgerBtn
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </Button>
        </Popover.Trigger>
        <Popover.Content className={styles.popover}>
          <div className={styles.hamburgerpopover}>
            {items.map((item) => (
              <Link
                style={{ display: "flex", justifyContent: "space-around" }}
                className={styles.popoverLink}
                key={item.title}
                href={item.href}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {item.image ? item.image : ""}
                {item.title}
              </Link>
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
      image: <AiOutlineLogin />,
      title: "Sign In",
      href: "/sign-in",
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
  ],
};

export default AppPopover;
