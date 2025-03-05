import LocaleRedirect from "@/components/layout/locale-redirect";
import Hero from "@/components/main-page/hero";
import LogosSection from "@/components/main-page/logos-section";
import Service from "@/components/main-page/service";
import Services from "@/components/main-page/services";
import { routing } from "@/i18n/routing";

export default async function HomePage() {
   return (
      <main>
         <LocaleRedirect defaultLocale={routing.defaultLocale} />
         <Hero />
         <Services />
         <Service />
         <LogosSection />
      </main>
   );
}
