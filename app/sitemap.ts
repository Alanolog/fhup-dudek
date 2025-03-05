import type { MetadataRoute } from "next";
const siteUrlPl = "https://www.klimatyzacja-dudek.pl/pl";
const siteUrlEn = "https://www.klimatyzacja-dudek.pl/pl";
const pages = ["/wentylacja", "/klimatyzacja", "/kontakt", "/chlodnictwo", "/realizacje"];

export default function sitemap(): MetadataRoute.Sitemap {
   return [
      {
         url: siteUrlPl,
         lastModified: new Date(),
         priority: 1.0,
      },
      ...pages.map((page) => ({
         url: `${siteUrlPl}${page}`,
         lastModified: new Date(),
         priority: 0.8,
      })),
      ...pages.map((page) => ({
         url: `${siteUrlEn}${page}`,
         lastModified: new Date(),
         priority: 0.8,
      })),
   ];
}
