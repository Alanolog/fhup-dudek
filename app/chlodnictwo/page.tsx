import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import Image from "next/image";
import image1 from "@/assets/realizations_small/realizations_3_small.png";
import image2 from "@/assets/realizations_small/realizations_7_small.png";
export default function ChlodnictwoPage() {
   const t = useTranslations("ChlodnictwoPage");
   return (
      <main className={styles.main}>
         <h1>{t("title")}</h1>
         <p>{t("lead1")}</p>
         <div className={styles.imageBox}>
            <Image src={image1} alt={t("title")} />
            <Image src={image2} alt={t("title")} />
         </div>
         <p>{t("lead2")}</p>
      </main>
   );
}
