import React from "react";
import { storeProductData } from "./ui/StoreProductData";
import { StoreProductProps } from "./StoreProduct.props";
import styles from "./StoreProduct.module.scss";
import { useTranslations } from "next-intl";


export default function StoreProducts() {
  const t = useTranslations("StoreProducts")
  return (
    <div className={styles.product_list_body}>
      {storeProductData.map((product: StoreProductProps) => (
        <div key={product.id} className={styles.product_item}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className={styles.product_image}
          />
          <div className={styles.product_details}>
            <div className={styles.product_name}>{product.name}</div>
            <div className={styles.platform}>{product.platform}</div>
            <div className={styles.category}>
              Category: {product.category.join(", ")}
            </div>
          </div>
          <div className={styles.price}>
            {product.price === 0 ? t("free") : `${product.price.toFixed(2)}$`}
          </div>
          <div className={styles.release_date}>
            Release Date: {product.releaseDate}
          </div>
        </div>
      ))}
    </div>
  );
}
