"use client";

import MainNavigation from "@/components/main/MainNavigation/MainNavigation";
import ProductBanner from "@/components/main/ProductBanner/ProductBanner";
import styles from "./StorePage.module.scss";

export default function StorePage() {
  return (
    <div className={styles.main_body}>  
      <MainNavigation />
      <div className={styles.banner_title_container}>
      <div className={styles.banner_title}>Popular</div>
      </div>
      <ProductBanner />
      <div></div>
    </div>
  );
}
