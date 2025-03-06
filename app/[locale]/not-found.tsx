import NavLink from "@/components/nav-link";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
   const { locale } = await params;
   const t = await getTranslations({ locale, namespace: "Metadata" });

   return {
      title: t("notFound.title"),
      description: t("notFound.description"),
      keywords: t("notFound.keywords"),
   };
}
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
