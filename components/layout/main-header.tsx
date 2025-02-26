"use client";
import Image from "next/image";
import styles from "./main-header.module.css";
import NavLink from "../nav-link";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function MainHeader() {
   const [menuOpen, setMenuOpen] = useState(false);
   const t = useTranslations("MainHeader");
   if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
         if (window.innerWidth > 1024) setMenuOpen(false);
      });
   }
   return (
      <header className={styles.header}>
         <nav className={styles.navbar}>
            <NavLink href="/">
               <Image src="/logo.png" alt="FHUP Dudek logo" width={154} height={32} priority />
            </NavLink>
            {/* MENU DESKTOP */}
            <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
               <li>
                  <div onClick={() => setMenuOpen(false)}>
                     <NavLink href="/chlodnictwo">{t("refrigeration")}</NavLink>
                  </div>
               </li>
               <li>
                  <div onClick={() => setMenuOpen(false)}>
                     <NavLink href="/wentylacja">{t("ventilation")}</NavLink>
                  </div>
               </li>
               <li>
                  <div onClick={() => setMenuOpen(false)}>
                     <NavLink href="/klimatyzacja">{t("AC")}</NavLink>
                  </div>
               </li>
               <li>
                  <div onClick={() => setMenuOpen(false)}>
                     <NavLink href="/kontakt">{t("contact")}</NavLink>
                  </div>
               </li>
               <li>
                  <div onClick={() => setMenuOpen(false)}>
                     <NavLink href="/realizacje">{t("realizations")}</NavLink>
                  </div>
               </li>
            </ul>
            {/* HAMBURGER MENU */}
            <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
               <div className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`}></div>
               <div className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`}></div>
               <div className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`}></div>
            </div>
         </nav>
      </header>
   );
}
