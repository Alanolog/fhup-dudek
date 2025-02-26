import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import Image from "next/image";
import image1 from "@/assets/klimatyzacja_photos/1.png";
import image2 from "@/assets/klimatyzacja_photos/2.png";
import image3 from "@/assets/klimatyzacja_photos/3.png";
import image4 from "@/assets/klimatyzacja_photos/4.png";
import image5 from "@/assets/klimatyzacja_photos/5.png";
import image6 from "@/assets/klimatyzacja_photos/6.png";
import LogosGrid from "@/components/ac-components/logos grid";
export default function KlimatyzacjaPage() {
   const t = useTranslations("KlimatyzacjaPage");
   return (
      <main className={styles.main}>
         <h1>{t("title")}</h1>
         <p>{t("lead1")}</p>
         <div className={styles.imageBox}>
            <Image src={image1} alt={t("title")} width={300} />
            <Image src={image2} alt={t("title")} width={300} />
            <Image src={image3} alt={t("title")} width={300} />
            <Image src={image4} alt={t("title")} width={300} />
            <Image src={image5} alt={t("title")} width={300} />
            <Image src={image6} alt={t("title")} width={300} />
         </div>
         <p>{t("lead2")}</p>
         <LogosGrid />
      </main>
   );
}
