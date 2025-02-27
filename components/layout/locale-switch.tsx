"use client";
import { useLocale, useTranslations } from "next-intl";
import styles from "./locale-switch.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function LocaleSwitch() {
   const locale = useLocale();
   const router = useRouter();
   const path = usePathname();
   const t = useTranslations("LocaleSwitch");
   const [selectedLocale, setSelectedLocale] = useState(locale);

   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newLocale = e.target.value;
      setSelectedLocale(newLocale);
      const splittedPath = path.split("/").filter((val) => val !== "");
      if (splittedPath.length >= 2) {
         const pathWithoutLocale = splittedPath.slice(1).join("/");
         const newPath = `/${newLocale}/${pathWithoutLocale}`;
         router.push(newPath);
         router.refresh();
      } else {
         router.push(`/${newLocale}`);
         router.refresh();
      }
   };
   return (
      <div className={styles.selectBox}>
         <span>🌐</span>
         <select className={styles.select} value={selectedLocale} onChange={handleChange}>
            <option value="pl">{t("polish")}</option>
            <option value="en">{t("english")}</option>
         </select>
      </div>
   );
}
