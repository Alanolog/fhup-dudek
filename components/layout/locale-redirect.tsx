"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LocaleRedirect({ defaultLocale }: { defaultLocale: string }) {
   const router = useRouter();
   const pathname = usePathname();

   useEffect(() => {
      if (!pathname.startsWith("/pl") && !pathname.startsWith("/en")) {
         if (pathname.length === 0) {
            router.replace(`/${defaultLocale}`);
         } else if (!pathname.includes("/pl") && !pathname.includes("/en")) {
            router.replace(`/${defaultLocale}/${pathname}`);
         }
      }
   }, [pathname, router, defaultLocale]);

   return null;
}
