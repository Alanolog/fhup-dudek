import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import Image from "next/image";
import image1 from "@/assets/realizations/realizations_8.jpeg";
import image2 from "@/assets/realizations/realizations_7.jpeg";
import image3 from "@/assets/realizations/realizations_11.png";
import bg from "@/assets/backgrounds/chlodnictwo-bg.jpg";

const mainStyles = {
   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${bg.src})`,
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundColor: "var(--background)",
};
export default function ChlodnictwoPage() {
   const t = useTranslations("ChlodnictwoPage");
   return (
      <main className={styles.main} style={mainStyles}>
         <div className={styles.container}>
            <h1>{t("title")}</h1>
            <p>{t("lead1")}</p>
            <p>{t("lead2")}</p>
            <Image src={image3} alt={t("title")} className={styles.resizedImage} />
            <div className={styles.imageBox}>
               <Image src={image1} alt={t("title")} className={styles.imageBoxResizableImages} />
               <Image src={image2} alt={t("title")} className={styles.imageBoxResizableImages} />
            </div>
            <p>{t("lead3")}</p>
         </div>
      </main>
   );
}
