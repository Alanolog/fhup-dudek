import LocaleRedirect from "@/components/layout/locale-redirect";
import NavLink from "@/components/nav-link";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function NotFound() {
   const t = useTranslations("NotFoundPage");
   return (
      <div
         style={{
            backgroundColor: "var(--background)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            height: "100vh",
         }}
      >
         <LocaleRedirect defaultLocale={routing.defaultLocale} />
         <h2 style={{ color: "var(--foreground)", textAlign: "center" }}>{t("title")}</h2>
         <NavLink href="">
            <button
               style={{
                  color: "var(--foreground)",
                  textAlign: "center",
                  padding: "0.5rem 1rem",
                  backgroundColor: "var(--primary)",
                  border: "1px solid var(--foreground)",
                  borderRadius: "1rem",
                  cursor: "pointer",
               }}
            >
               {t("btnText")}
            </button>
         </NavLink>
      </div>
   );
}
