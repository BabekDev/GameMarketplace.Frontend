"use client"  

import { Button } from "@mui/base/Button/Button";
import styles from "./Header.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const { push } = useRouter();
  return (
    <div className={styles.header_block}>
      <div className={styles.left_block}>
        <div className={styles.logo_block}>
          <Image src="/logo.png" alt="Logo" width={200} height={100} onClick={() => push("/")}></Image>
        </div>
      </div>
      <div className={styles.center_block}>
        <div className={styles.header_menu}>
          <h3 onClick={() => push("/product")}>Store</h3>
          <h3>Community</h3>
          <h3>Chat</h3>
          <h3>Support</h3>
        </div>
      </div>
      <div className={styles.right_block}>
        <div className={styles.register_block}>
        <Button onClick={() => push("/registration")}>Register</Button>
        </div>
        <div className={styles.login_block}>
        <Button onClick={() => push("/login")}>Login</Button>
        </div>
      </div>
    </div>
  );
}
