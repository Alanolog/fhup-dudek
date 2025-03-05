import type { MetadataRoute } from "next";
const siteUrlPl = "https://www.klimatyzacja-dudek.pl/pl";
const siteUrlEn = "https://www.klimatyzacja-dudek.pl/en";
const pages = ["/wentylacja", "/klimatyzacja", "/kontakt", "/chlodnictwo", "/realizacje"];
const mappedPages: {
   url: string;
   lastModified: Date;
   priority: number;
}[] = [];
pages
   .map((page) => [
      {
         url: `${siteUrlPl}${page}`,
         lastModified: new Date(),
         priority: 0.8,
      },
      {
         url: `${siteUrlEn}${page}`,
         lastModified: new Date(),
         priority: 0.8,
      },
   ])
   .forEach((page) => {
      mappedPages.push(page[0]);
      mappedPages.push(page[1]);
   });
export default function sitemap(): MetadataRoute.Sitemap {
   return [
      {
         url: siteUrlPl,
         lastModified: new Date(),
         priority: 1.0,
      },
      ...mappedPages,
   ];
}
