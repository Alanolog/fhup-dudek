import { defineRouting, LocalePrefix } from "next-intl/routing";

export const routing: {
   locales: string[];
   defaultLocale: "pl" | "en";
   localePrefix?: LocalePrefix<readonly ["pl", "en"], "always"> | undefined;
} = defineRouting({
   locales: ["pl", "en"],
   defaultLocale: "pl",
   localePrefix: "always",
});
