import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import MainHeader from "@/components/layout/main-header";
import Footer from "@/components/layout/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
   weight: ["300", "400", "500", "700"],
   subsets: ["latin-ext"],
});

export const metadata: Metadata = {
   title: "F.H.U. Dudek",
   description:
      "F.H.U. Dudek oferuje kompleksowe usługi w zakresie instalacji chłodnictwa, klimatyzacji, wentylacji oraz pomp ciepła. Zapewniamy nowoczesne i energooszczędne rozwiązania dla firm oraz klientów indywidualnych. Skontaktuj się z nami, aby dowiedzieć się więcej!",
   keywords:
      "chłodnictwo, instalacje chłodnicze, klimatyzacja, pompy ciepła, wentylacja, ogrzewanie, chłodnie, montaż klimatyzacji, serwis klimatyzacji, systemy chłodnicze, energooszczędne rozwiązania, Żory, Świerklany, Rybnik, Śląsk, Katowice, Jastrzębie zdrój, Wodzisław Śląski, Racibórz",
};

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
