import React from "react";
import styles from "./navbar.module.css";
import Brand from "../../components/ui/Brand/Brand";
import Popover from "../../components/ui/Popover/Popover";
import { useSession } from "next-auth/react";

const Navbar = ({ title }) => {
  const { data: session, status } = useSession();

  return (
    <nav className={styles.nav}>
      <Brand />
      <h1>{title}</h1>
      <div>
        <Popover session={session} />
      </div>
    </nav>
  );
};

export default Navbar;
