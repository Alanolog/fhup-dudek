import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import Image from "next/image";
import image1 from "@/assets/realizations_small/realizations_1_small.png";
import image2 from "@/assets/realizations_small/realizations_4_small.png";
import image3 from "@/assets/realizations_small/realizations_5_small.png";
import image4 from "@/assets/realizations_small/realizations_6_small.png";
import LogosGrid from "@/components/ac-components/logos grid";
export default function KlimatyzacjaPage() {
   const t = useTranslations("KlimatyzacjaPage");
   return (
      <main className={styles.main}>
         <h1>{t("title")}</h1>
         <p>{t("lead1")}</p>
         <div className={styles.imageBox}>
            <Image src={image1} alt={t("title")} />
            <Image src={image2} alt={t("title")} />
            <Image src={image3} alt={t("title")} />
            <Image src={image4} alt={t("title")} />
         </div>
         <p>{t("lead2")}</p>
         <LogosGrid />
      </main>
   );
}
