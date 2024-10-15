"use client";

import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <h4>{t("title")}</h4>
      <h5>{t("about")}</h5>
    </div>
  );
}
