import Realizations from "@/components/main-page/realizations";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
   const { locale } = await params;
   const t = await getTranslations({ locale, namespace: "Metadata" });

   return {
      title: t("realizacje.title"),
      description: t("realizacje.description"),
      keywords: t("realizacje.keywords"),
   };
}

export default function RealizacjePage() {
   return (
      <main>
         <Realizations />
      </main>
   );
}
