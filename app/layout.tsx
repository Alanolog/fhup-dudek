import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/layout/main-header";
import Footer from "@/components/layout/footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const roboto = Roboto({
   weight: ["300", "400", "500", "700"],
   subsets: ["latin-ext"],
});

export const metadata: Metadata = {
   title: "F.H.U. Dudek",
   description:
      "F.H.U. Dudek oferuje kompleksowe usługi w zakresie instalacji chłodnictwa, klimatyzacji, wentylacji oraz pomp ciepła. Zapewniamy nowoczesne i energooszczędne rozwiązania dla firm oraz klientów indywidualnych. Skontaktuj się z nami, aby dowiedzieć się więcej!",
   keywords:
      "chłodnictwo, instalacje chłodnicze, klimatyzacja, pompy ciepła, wentylacja, ogrzewanie, chłodnie, montaż klimatyzacji, serwis klimatyzacji, systemy chłodnicze, energooszczędne rozwiązania",
};

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const locale = await getLocale();
   const messages = await getMessages();
   return (
      <html lang={locale}>
         <body className={roboto.className}>
            <NextIntlClientProvider messages={messages}>
               <MainHeader />
               {children}
               <Footer />
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
