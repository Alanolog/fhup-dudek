"use client";
import Link from "next/link";
import styles from "./nav-link.module.css";
import { usePathname } from "next/navigation";
interface NavProps {
   href: string;
   children: React.ReactNode;
}
const NavLink: React.FC<NavProps> = ({ href, children }) => {
   const path = usePathname();
   return (
      <Link href={href} className={path.startsWith(href) ? styles.navLinkTextActive : styles.navLinkText}>
         {children}
      </Link>
   );
};

export default NavLink;
