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
      openGraph: {
         title: t("layout.title"),
         description: t("layout.description"),
         url: `https://www.klimatyzacja-dudek.pl/${locale}`,
         siteName: "F.H.U. Dudek",
         type: "website",
      },
      other: {
         "application/ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: "F.H.U. Dudek",
            description:
               "F.H.U. Dudek – kompleksowe rozwiązania w zakresie klimatyzacji, chłodnictwa, wentylacji i pomp ciepła. Obsługa w Żorach, Rybniku, Katowicach, Śląsku.",
            url: "https://www.klimatyzacja-dudek.pl/pl",
            logo: "https://www.klimatyzacja-dudek.pl/logo.png",
            address: {
               "@type": "PostalAddress",
               streetAddress: "Ul. Pogodna 9C",
               addressLocality: "Świerklany",
               postalCode: "44-266",
               addressCountry: "PL",
            },
            telephone: "+48 609 132 785",
            openingHours: "Mo-Fr 08:00-20:00",
         }),
      },
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
