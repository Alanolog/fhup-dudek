import type { MetadataRoute } from "next";
const siteUrl = "https://www.klimatyzacja-dudek.pl";
const pages = ["/wentylacja", "/klimatyzacja", "/kontakt", "/chlodnictwo", "/realizacje"];

export default function sitemap(): MetadataRoute.Sitemap {
   return [
      {
         url: siteUrl,
         lastModified: new Date(),
         priority: 1.0,
         alternates: {
            languages: {
               en: `${siteUrl}/en`,
               pl: `${siteUrl}/pl`,
            },
         },
      },
      ...pages.map((page) => ({
         url: `${siteUrl}${page}`,
         lastModified: new Date(),
         priority: 0.8,
         alternates: {
            languages: {
               en: `${siteUrl}/en${page}`,
               pl: `${siteUrl}/pl${page}`,
            },
         },
      })),
   ];
}
