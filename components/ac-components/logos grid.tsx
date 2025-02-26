import Image from "next/image";
import styles from "./logos-grid.module.css";
import logoHaier from "@/assets/AC_logos/logoHaier.png";
import logoLG from "@/assets/AC_logos/logoLG.png";
import logoRotenso from "@/assets/AC_logos/logoRotenso.png";
import logoFuji from "@/assets/AC_logos/logoFuji.png";
import logoGree from "@/assets/AC_logos/logoGree.png";
import logoVivax from "@/assets/AC_logos/logoVivax.png";
import logoMitsubishi from "@/assets/AC_logos/logoMitsubishi.png";
import { useTranslations } from "next-intl";
export default function LogosGrid() {
   const t = useTranslations("LogosGrid");
   return (
      <section className={styles.mainGrid}>
         <Image src={logoHaier} width={150} alt="Haier" />
         <Image src={logoLG} width={150} alt="LG" />
         <Image src={logoRotenso} width={150} alt="Rotenso" />
         <Image src={logoFuji} width={150} alt="Fuji" />
         <Image src={logoGree} width={150} alt="Gree" />
         <Image src={logoVivax} width={150} alt="Vivax" />
         <Image src={logoMitsubishi} width={150} alt="Mitsubishi" />
         <p>{t("logoMessage")}</p>
      </section>
   );
}
