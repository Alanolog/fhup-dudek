import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import bg from "@/assets/backgrounds/wentylacja-bg.jpg";
import mainPhoto from "@/assets/wentylacja_photos/1.jpg";
import Image from "next/image";
const mainStyles = {
   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${bg.src})`,
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundColor: "var(--background)",
};
export default function WentylacjaPage() {
   const t = useTranslations("WentylacjaPage");
   return (
      <main className={styles.main} style={mainStyles}>
         <div className={styles.container}>
            <h1>{t("title")}</h1>
            <p>{t("lead")}</p>
            <p>{t("lead2")}</p>
            <p>{t("listLead")}</p>
            <ul>
               <li>{t("listItem1")}</li>
               <li>{t("listItem2")}</li>
               <li>{t("listItem3")}</li>
               <li>{t("listItem4")}</li>
            </ul>
            <Image src={mainPhoto} alt={t("photoAlt")} width={300} />
         </div>
      </main>
   );
}
