import Hero from "@/components/main-page/hero";
import LogosSection from "@/components/main-page/logos-section";
import Realizations from "@/components/main-page/realizations";
import Service from "@/components/main-page/service";
import Services from "@/components/main-page/services";

export default async function HomePage() {
   return (
      <main>
         <Hero />
         <Services />
         <Service />
         <LogosSection />
         <Realizations />
      </main>
   );
}
