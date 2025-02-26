import Image from "next/image";
import NavLink from "../nav-link";
import styles from "./services.module.css";
import icon_winter from "@/public/icons/icon_winter.png";
import icon_AC from "@/public/icons/icon_AC.png";
import icon_modeFan from "@/public/icons/icon_mode-fan.png";
import { useTranslations } from "next-intl";

const Services = () => {
   const t = useTranslations("Services");
   return (
      <section className={styles.services}>
         <h2>{t("title")}</h2>
         <p>{t("subtitle")}</p>
         <div className={styles.serviceList}>
            <NavLink href="/chlodnictwo">
               <div className={styles.service}>
                  <Image src={icon_winter} alt={t("refrigeration_title")} width={48} height={48} />
                  <h3>{t("refrigeration_title")}</h3>
                  <p>{t("refrigeration_subtitle")}</p>
               </div>
            </NavLink>
            <NavLink href="/wentylacja">
               <div className={styles.service}>
                  <Image src={icon_AC} alt={t("ventilation_title")} width={48} height={48} />
                  <h3>{t("ventilation_title")}</h3>
                  <p>{t("ventilation_subtitle")}</p>
               </div>{" "}
            </NavLink>
            <NavLink href="/klimatyzacja">
               <div className={styles.service}>
                  <Image src={icon_modeFan} alt={t("AC_title")} width={48} height={48} />
                  <h3>{t("AC_title")}</h3>
                  <p>{t("AC_subtitle")}</p>
               </div>{" "}
            </NavLink>
         </div>
      </section>
   );
};

export default Services;
