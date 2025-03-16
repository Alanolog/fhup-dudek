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
import Link from "next/link";
export default function LogosGrid() {
   const t = useTranslations("LogosGrid");
   return (
      <section className={styles.mainGrid}>
         <Link href="https://www.haier.com" target="_blank">
            <Image src={logoHaier} width={150} alt="Haier" />
         </Link>
         <Link href="https://www.lg.com" target="_blank">
            <Image src={logoLG} width={150} alt="LG" />
         </Link>
         <Link href="https://www.rotenso.com" target="_blank">
            <Image src={logoRotenso} width={150} alt="Rotenso" />
         </Link>
         <Link href="https://www.fujielectric.com" target="_blank">
            <Image src={logoFuji} width={150} alt="Fuji" />
         </Link>
         <Link href="https://www.gree.com" target="_blank">
            <Image src={logoGree} width={150} alt="Gree" />
         </Link>
         <Link href="https://www.vivax.com" target="_blank">
            <Image src={logoVivax} width={150} alt="Vivax" />
         </Link>
         <Link href="https://www.mitsubishielectric.com" target="_blank">
            <Image src={logoMitsubishi} width={150} alt="Mitsubishi" />
         </Link>
         <p>{t("logoMessage")}</p>
      </section>
   );
}
