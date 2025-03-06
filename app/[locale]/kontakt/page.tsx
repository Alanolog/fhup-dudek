import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
   const { locale } = await params;
   const t = await getTranslations({ locale, namespace: "Metadata" });

   return {
      title: t("kontakt.title"),
      description: t("kontakt.description"),
      keywords: t("kontakt.keywords"),
   };
}

export default function Kontakt() {
   const t = useTranslations("Footer");
   const t2 = useTranslations("Kontakt");
   return (
      <main className={styles.main}>
         <h1>{t2("title")}</h1>
         <section className={styles.googleMapsBox}>
            <h2>{t2("subtitle_googleMaps")}</h2>
            <div>
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5125.33317889255!2d18.597038!3d50.036343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114dbf531e89fd%3A0x66354f55ff79e488!2sPogodna%209C%2C%2044-266%20%C5%9Awierklany%2C%20Polska!5e0!3m2!1spl!2sus!4v1740581328427!5m2!1spl!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
               ></iframe>
            </div>
         </section>
         <section className={styles.contactInfoBox}>
            <h2>{t2("subtitle_contactDetails")}</h2>
            <div className={styles.contactInfoDetailsBox}>
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
            </div>
         </section>
      </main>
   );
}
