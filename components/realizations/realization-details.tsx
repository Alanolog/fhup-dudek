import { useTranslations } from "next-intl";
import styles from "./realization-details.module.css";
import Image from "next/image";
import NavLink from "@/components/nav-link";

const RealizationsDetails = ({ slug }: { slug: string }) => {
   return (
      <main className={styles.realization}>
         {GoBackButton()}
         <ImageRealization slug={slug} />
      </main>
   );
};
const ImageRealization = async ({ slug }: { slug: string }) => {
   const image = await import(`@/assets/realizations/realizations_${slug}.png`);
   return <Image src={image} alt="" />;
};
const GoBackButton = () => {
   const t = useTranslations("RealizationsDetails");
   return (
      <NavLink href="./">
         <h1 className={styles.goBackBtn}>{t("goback")}</h1>
      </NavLink>
   );
};

export default RealizationsDetails;
