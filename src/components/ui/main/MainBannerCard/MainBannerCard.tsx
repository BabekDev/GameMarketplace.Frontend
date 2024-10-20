import TagNew from "@/components/global/MainTagNew/MainTagNew";
import styles from "./MainBannerCard.module.scss";
import Image from "next/image";

export default function MainBannerCard() {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
        <div className={styles.tagNew}>
          <TagNew />
        </div>
        <Image
          src="/BannerImages/cs2.png"
          height={220}
          width={360}
          alt="CS2 Image"
        />
      </div>
      <div className={`${styles.card} ${styles.centerCard}`}>
      <div className={styles.tagNew}>
          <TagNew />
        </div>
        <Image
          src="/BannerImages/RB6.png"
          height={220}
          width={360}
          alt="RB6 Image"
        />
      </div>
      <div className={styles.card}>
      <div className={styles.tagNew}>
          <TagNew />
        </div>
        <Image
          src="/BannerImages/dota2.png"
          height={220}
          width={360}
          alt="Dota2 Image"
        />
      </div>
    </div>
  );
}
