"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("xofoz-theme");
    const nextTheme = stored || "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("xofoz-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="header-start">
          <button
            className="theme-toggle"
            type="button"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <span className="theme-toggle__icons" aria-hidden="true">
              {/* Moon — shown in dark mode */}
              <svg className="theme-icon theme-icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              {/* Sun — shown in light mode */}
              <svg className="theme-icon theme-icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4.5" />
                <line x1="12" y1="2" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="22" />
                <line x1="2" y1="12" x2="5" y2="12" />
                <line x1="19" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
                <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
                <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
                <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
              </svg>
            </span>
          </button>
        </div>

        <Link className="brand" href="/" aria-label="XOFOZ home">
          <img src="/brand/xofoz-logo.png" alt="XOFOZ logo" />
        </Link>

        <div className="header-end">
          <button
            className={`menu-toggle ${isOpen ? "is-active" : ""}`}
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </header>

      <div className={`nav-drawer ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
        <div
          className="nav-drawer__backdrop"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
        <nav className="nav-drawer__panel" aria-label="Primary navigation">
          <div className="nav-drawer__head">
            <Link
              className="brand"
              href="/"
              aria-label="XOFOZ home"
              onClick={() => setIsOpen(false)}
            >
              <img src="/brand/xofoz-logo.png" alt="XOFOZ logo" />
            </Link>
            <button
              className="nav-drawer__close"
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              <span />
              <span />
            </button>
          </div>

          <div className="nav-drawer__links">
            {navItems.map((item, i) => (
              <Link
                className={isActive(item.href) ? "active" : ""}
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-drawer__link-num">0{i + 1}</span>
                <span className="nav-drawer__link-label">{item.label}</span>
                <span className="nav-drawer__link-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>

        </nav>
      </div>
    </>
  );
}
