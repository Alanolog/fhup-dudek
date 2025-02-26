import { useTranslations } from "next-intl";
import ClickableLogo from "../main-page/clickable-logo";
import styles from "./footer.module.css";

const Footer = () => {
   const t = useTranslations("Footer");
   return (
      <footer className={styles.footer}>
         <section className={styles.contactInfoBox}>
            <div>
               <p>{t("contactInfo_companyName")}</p>
               <p>{t("contactInfo_companyAddress")}</p>
               <p>{t("contactInfo_companyAdressStreet")}</p>
            </div>
            <div>
               <p>{t("contactInfo_phone")}</p>
               <p>{t("contactInfo_email")}</p>
               <p>{t("contactInfo_NIP")}</p>
            </div>
         </section>
         <div>
            <ClickableLogo width={116} height={24} />
         </div>
         <div className={styles.copyRight}>© 2025 {t("contactInfo_companyName")}</div>
      </footer>
   );
};

export default Footer;
