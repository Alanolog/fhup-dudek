import { Roboto } from "next/font/google";
import "../globals.css";
import MainHeader from "@/components/layout/main-header";
import Footer from "@/components/layout/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
   const { locale } = await params;
   const t = await getTranslations({ locale, namespace: "Metadata" });

   return {
      title: t("layout.title"),
      description: t("layout.description"),
      keywords: t("layout.keywords"),
   };
}
const roboto = Roboto({
   weight: ["300", "400", "500", "700"],
   subsets: ["latin-ext"],
});

export default async function RootLayout({
   children,
   params,
}: Readonly<{
   children: React.ReactNode;
   params: Promise<{ locale: string }>;
}>) {
   const { locale } = await params;
   const usedLocale = ["pl", "en"].includes(locale) ? locale : "pl";
   setRequestLocale(usedLocale);
   const messages = await getMessages();

   return (
      <html lang={usedLocale}>
         <body className={roboto.className}>
            <NextIntlClientProvider messages={messages}>
               <MainHeader />
               {children}
               <Footer />
               <Analytics />
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
