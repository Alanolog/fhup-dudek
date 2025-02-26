"use client";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./locale-switch.module.css";

export default function LocaleSwitch() {
   const locale = useLocale();
   const router = useRouter();
   const [isPending, startTransition] = useTransition();
   const pathname = usePathname();
   const params = useParams();
   const t = useTranslations("LocaleSwitch");

   function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
      const nextLocale = event.target.value;
      startTransition(() => {
         router.replace(
            // @ts-expect-error TypeScript
            { pathname, params },
            { locale: nextLocale }
         );
      });
   }

   return (
      <>
         <label>{t("label")}</label>
         <select className={styles.select} defaultValue={locale} disabled={isPending} onChange={onSelectChange}>
            {[
               { currencyId: "pl", currencyName: "Polski" },
               { currencyId: "en", currencyName: "English" },
            ].map((cur) => (
               <option key={cur.currencyId} value={cur.currencyId}>
                  {cur.currencyName}
               </option>
            ))}
         </select>
      </>
   );
}
