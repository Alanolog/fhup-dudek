import { useTranslations } from "next-intl";
import styles from "./realizations.module.css";
import Image from "next/image";
import realizationSmall1 from "@/assets/realizations_small/realizations_1_small.png";
import realizationSmall2 from "@/assets/realizations_small/realizations_2_small.png";
import realizationSmall3 from "@/assets/realizations_small/realizations_3_small.png";
import realizationSmall4 from "@/assets/realizations_small/realizations_4_small.png";
import realizationSmall5 from "@/assets/realizations_small/realizations_5_small.png";
import realizationSmall6 from "@/assets/realizations_small/realizations_6_small.png";
import realizationSmall7 from "@/assets/realizations_small/realizations_7_small.png";
import realizationSmall8 from "@/assets/realizations_small/realizations_8_small.png";
import realizationSmall10 from "@/assets/realizations_small/realizations_10_small.png";
import NavLink from "../nav-link";
const Realizations = () => {
   const t = useTranslations("Realizations");
   return (
      <section className={styles.realizations}>
         <h2>{t("title")}</h2>
         <div className={styles.imageGrid}>
            <NavLink href="/realizacje/1">
               <Image src={realizationSmall1} alt={t("realizationSmall1")} />
            </NavLink>
            <NavLink href="/realizacje/2">
               <Image src={realizationSmall2} alt={t("realizationSmall2")} />
            </NavLink>
            <NavLink href="/realizacje/3">
               <Image src={realizationSmall3} alt={t("realizationSmall3")} />
            </NavLink>
            <NavLink href="/realizacje/4">
               <Image src={realizationSmall4} alt={t("realizationSmall4")} />
            </NavLink>
            <NavLink href="/realizacje/5">
               <Image src={realizationSmall5} alt={t("realizationSmall5")} />
            </NavLink>
            <NavLink href="/realizacje/6">
               <Image src={realizationSmall6} alt={t("realizationSmall6")} />
            </NavLink>
            <NavLink href="/realizacje/7">
               <Image src={realizationSmall7} alt={t("realizationSmall7")} />
            </NavLink>
            <NavLink href="/realizacje/8">
               <Image src={realizationSmall8} alt={t("realizationSmall8")} />
            </NavLink>
            <NavLink href="/realizacje/10">
               <Image src={realizationSmall10} alt={t("realizationSmall10")} />
            </NavLink>
         </div>
      </section>
   );
};

export default Realizations;
