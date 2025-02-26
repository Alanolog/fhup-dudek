import { useTranslations } from "next-intl";
import styles from "./page.module.css";
export default function WentylacjaPage() {
   const t = useTranslations("WentylacjaPage");
   return (
      <main className={styles.main}>
         <h1>{t("title")}</h1>
         <p>{t("lead1")}</p>
         <ul>
            <li>{t("listItem1")}</li>
            <li>{t("listItem2")}</li>
            <li>{t("listItem3")}</li>
            <li>{t("listItem4")}</li>
         </ul>
         <p>{t("lead2")}</p>
      </main>
   );
}
