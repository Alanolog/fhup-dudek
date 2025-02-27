import styles from "./logos-section.module.css";
import { useTranslations } from "next-intl";
import LogosGrid from "../ac-components/logos grid";
const LogosSection = () => {
   const t = useTranslations("LogosSection");
   return (
      <section className={styles.logosSection}>
         <div className={styles.logosBox}>
            <p>{t("logosInfo")}</p>
            <LogosGrid />
         </div>
      </section>
   );
};

export default LogosSection;
