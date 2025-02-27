"use client";
import Image from "next/image";
import styles from "./main-header.module.css";
import NavLink from "../nav-link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LocaleSwitch from "./locale-switch";

export default function MainHeader() {
   const [menuOpen, setMenuOpen] = useState(false);
   const [windowWidth, setWindowWidth] = useState(1025);
   const t = useTranslations("MainHeader");

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
         if (window.innerWidth > 1024) setMenuOpen(false);
      };

      // Adding event listener
      window.addEventListener("resize", handleResize);

      // Clean up on unmount
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);
   return (
      <header className={styles.header}>
         <nav className={styles.navbar}>
            <NavLink href="/">
               <Image
                  src="/logo.png"
                  alt="FHUP Dudek logo"
                  width={windowWidth >= 500 ? 154 : 102}
                  height={windowWidth >= 500 ? 32 : 21}
                  priority
               />
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
                     <NavLink href="/realizacje">{t("realizations")}</NavLink>
                  </div>
               </li>
               <li>
                  <div onClick={() => setMenuOpen(false)}>
                     <NavLink href="/kontakt">{t("contact")}</NavLink>
                  </div>
               </li>
               <li>
                  <LocaleSwitch />
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
