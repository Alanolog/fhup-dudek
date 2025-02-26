import { useTranslations } from "next-intl";
import NavLink from "../nav-link";
import styles from "./hero.module.css";

const Hero = () => {
   const t = useTranslations("Hero");
   return (
      <section className={styles.hero}>
         <h1>{t("title")}</h1>
         <p>{t("subtitle")}</p>
         <NavLink href="/kontakt">
            <button className={styles.ctaBtn}>{t("secondaryButton")}</button>
         </NavLink>
      </section>
   );
};

export default Hero;
