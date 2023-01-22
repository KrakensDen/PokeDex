import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./brand.module.css";

const Brand = () => {
  return (
    <div className={styles.Brand}>
      <Link href={"/"}>
        <Image
          typeof="image"
          width={40}
          height={40}
          src="/android-chrome-256x256.png"
          alt={"Brand Img"}
        ></Image>
      </Link>
    </div>
  );
};

export default Brand;
