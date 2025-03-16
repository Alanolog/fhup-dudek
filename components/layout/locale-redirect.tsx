"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LocaleRedirect({ defaultLocale }: { defaultLocale: string }) {
   const router = useRouter();
   const pathname = usePathname();

   useEffect(() => {
      if (pathname.length === 0) {
         router.replace(`/${defaultLocale}`);
      }
   }, [pathname, router, defaultLocale]);

   return null;
}
