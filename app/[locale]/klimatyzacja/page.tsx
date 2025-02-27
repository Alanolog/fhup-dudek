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
import bg from "@/assets/backgrounds/klimatyzacja-bg.jpg";
const mainStyles = {
   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${bg.src})`,
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundColor: "var(--background)",
};
export default function KlimatyzacjaPage() {
   const t = useTranslations("KlimatyzacjaPage");
   return (
      <main className={styles.main} style={mainStyles}>
         <div className={styles.container}>
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
         </div>
      </main>
   );
}
