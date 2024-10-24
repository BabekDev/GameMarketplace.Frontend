import styles from "./NetworkServicesProductCard.module.scss";
import Image from "next/image";
import { networkServiceData } from "./NetworkServicesData/NetworkServicesData";
import { useTranslations } from "next-intl";

export default function NetworkProductCard() {
  const { services } = networkServiceData;
  const t = useTranslations("NetworkServicesProductPage");

  return (
    <div className={styles.game_card_container}>
      {services.map((service) => (
        <div key={service.id} className={styles.game_card_body}>
          <div className={styles.card_logo}>
            <Image
              src={service.serviceImageUrl}
              height={130}
              width={170}
              alt={service.serviceName}
            />
          </div>
          <div className={styles.label}>{service.serviceName}</div>
          <div className={styles.card_content}>
            <div className={styles.top_item_title}>
              ▼ {t("recommendation")} ▼
            </div>
            <div className={styles.top_items}>
              {service.recommendations.length > 0 ? (
                service.recommendations.map((game, idx) => (
                  <div key={idx} className={styles.top_item}>
                    {game}
                  </div>
                ))
              ) : (
                <div className={styles.no_recommendations}>
                  {t("no_recommendations")}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
