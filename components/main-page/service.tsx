import styles from "./service.module.css";
import { useTranslations } from "next-intl";
import icon_wrench from "@/public/icons/icon_wrench.jpg";
import Image from "next/image";
const Service = () => {
   const t = useTranslations("Service");
   return (
      <section className={styles.service}>
         <h2>{t("title")}</h2>
         <article>
            <div>
               <p>{t("lead")}</p>
               <p>{t("lead2")}</p>
            </div>
            <div>
               <Image src={icon_wrench} alt={t("title")} width={300} />
            </div>
         </article>
      </section>
   );
};

export default Service;
