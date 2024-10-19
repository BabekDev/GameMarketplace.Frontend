import styles from "./GameProduct.module.scss";
import GameProductCard from "./ui/GameProductCard/GameProductCard";

export default function GameProduct() {
  return (
    <div className={styles.game_body}>
      <div className={styles.header}>
        <h4 className={styles.title}>Game Services</h4>
      </div>
      <GameProductCard />
    </div>
  );
}
