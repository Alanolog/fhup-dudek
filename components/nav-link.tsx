"use client";
import Link from "next/link";
import styles from "./nav-link.module.css";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
interface NavProps {
   href: string;
   children: React.ReactNode;
}
const NavLink: React.FC<NavProps> = ({ href, children }) => {
   const path = usePathname();
   let locale = useLocale();
   locale = routing.locales.includes(locale) ? locale : routing.defaultLocale;
   return (
      <Link
         href={`/${locale}/${href}`}
         className={path.startsWith(href) ? styles.navLinkTextActive : styles.navLinkText}
      >
         {children}
      </Link>
   );
};

export default NavLink;
