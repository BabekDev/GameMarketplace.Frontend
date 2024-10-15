"use client";

import styles from "./MainHeader.module.scss";
import Link from "next/link";
import Logo from "@/components/global/Logo/Logo";
import LocalSelect from "@/components/global/LocalSelect/LocalSelect";
import { useTranslations } from "next-intl";

export default function MainHeader() {
  const t = useTranslations("HeaderNavMenu");

  return (
    <div className={styles.header_block}>
      <div className={styles.left_block}>
        <Logo />
      </div>
      <div className={styles.center_block}>
        <nav className={styles.navigation_menu}>
          <Link className={styles.menu_item} href={"/product"}>
            {t("store_title")}
          </Link>
          <Link className={styles.menu_item} href={"/community"}>
            {t("community_title")}
          </Link>
          <Link className={styles.menu_item} href={"/chat"}>
            {t("chat_title")}
          </Link>
          <Link className={styles.menu_item} href={"/support"}>
            {t("support_title")}
          </Link>
        </nav>
      </div>
      <div className={styles.right_block}>
        <div className={styles.login_block}>
          <Link className={styles.login_btn} href="/login">
            Login
          </Link>
        </div>
        <div className={styles.register_block}>
          <Link className={styles.register_btn} href="/register">
            Register
          </Link>
        </div>
        <div className={styles.local_block}>
          <LocalSelect />
        </div>
      </div>
    </div>
  );
}
