"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LocaleRedirect({ defaultLocale }: { defaultLocale: string }) {
   const router = useRouter();
   const pathname = usePathname();

   useEffect(() => {
      const currentHost = window.location.host;

      if (!currentHost.startsWith("www") && !currentHost.startsWith("localhost")) {
         router.replace(`https://www.${window.location.host}${pathname}`);
      }
   }, [pathname, router, defaultLocale]);

   return null;
}
