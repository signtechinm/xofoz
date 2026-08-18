"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { serviceCategories } from "../data/service-categories";
import { solutionNavItems } from "../data/solutions";
import { industryNavItems } from "../data/industries";
import BrandLogo from "./BrandLogo";

const productMenuBrands = [
  ["Microsoft", "/partners/microsoft.svg"],
  ["Fortinet", "/partners/fortinet.svg"],
  ["Sophos", "/partners/sophos.svg"],
  ["ESET", "/partners/eset.svg"],
  ["Acronis", "/partners/acronis.svg"],
  ["Aruba", "/partners/aruba.svg"],
  ["Hikvision", "/partners/hikvision.svg"],
  ["Tally Prime", "/partners/tally-prime.svg"],
] as const;

const navItems = [
  {
    label: "Services", href: "/services", image: "/services/managed-it-amc.png",
    description: "Reliable day-to-day technology ownership for UAE businesses.",
    children: serviceCategories.map((category) => category.label),
  },
  {
    label: "Products", href: "/products", image: "/pillars/authorised-it-products.png",
    description: "Genuine business technology, licensing, hardware, and security products.",
    children: [],
  },
  {
    label: "Solutions", href: "/solutions", image: "/services/office-it-setup.png",
    description: "Complete solutions engineered around the real office requirement.",
    children: solutionNavItems.map((solution) => solution.label),
  },
  {
    label: "Industries", href: "/industries", image: "/industries/manufacturing-hero-v2.webp",
    description: "Practical technology experience across major Abu Dhabi industries.",
    children: industryNavItems.map((industry) => industry.label),
  },
  {
    label: "About", href: "/about", image: "/about/who-we-are-ops-desk.png",
    description: "Meet the Abu Dhabi team behind XOFOZ and our way of working.",
    children: ["Who we are", "How XOFOZ works", "Why choose XOFOZ", "Technology ecosystem", "Client feedback"],
  },
  {
    label: "Contact", href: "/contact", image: "/story/how-xofoz-works.png",
    description: "Start with your requirement and get a clear practical next step.",
    children: ["Send your requirement", "Free consultation", "Request AMC quote", "Urgent IT support", "Office location"],
  },
];

export default function Header() {
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);

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

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="header-start">
          <button
            ref={menuButtonRef}
            className={`menu-toggle ${isOpen ? "is-active" : ""}`}
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="primary-navigation-panel"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
          <span className="header-menu-label">Menu</span>
        </div>

        <Link className="brand header-brand" href="/" aria-label="XOFOZ home">
          <BrandLogo />
        </Link>

        <div className="header-end">
          <a
            className="quick-call header-whatsapp"
            href="https://wa.me/971523554202"
            aria-label="Chat with XOFOZ on WhatsApp"
            title="WhatsApp"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.04 2a9.84 9.84 0 0 0-8.49 14.8L2 22l5.34-1.4A9.96 9.96 0 1 0 12.04 2Zm0 17.93a8.02 8.02 0 0 1-4.09-1.12l-.3-.18-3.17.83.85-3.08-.2-.32a7.88 7.88 0 0 1-1.21-4.2 8.12 8.12 0 1 1 8.12 8.07Zm4.45-6.08c-.24-.12-1.44-.7-1.66-.79-.22-.08-.38-.12-.55.13-.16.24-.62.78-.76.94-.14.17-.28.19-.52.07-.25-.12-1.03-.38-1.96-1.2a7.38 7.38 0 0 1-1.36-1.68c-.14-.24-.02-.37.1-.49.11-.11.25-.28.37-.42.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.65.3-.22.25-.85.84-.85 2.04 0 1.2.88 2.36 1 2.53.12.16 1.72 2.62 4.16 3.68.58.25 1.04.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.47-.28Z" />
            </svg>
          </a>
          <Link className="quick-call header-quote" href="/#quote">Get a Quote</Link>
        </div>
      </header>

      <div className={`header-dropdown ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
        <div
          className="header-dropdown__backdrop"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
        <nav
          id="primary-navigation-panel"
          className={`header-dropdown__panel ${
            navItems[activeMenu].children.length > 12 ? "header-dropdown__panel--expanded" : ""
          }`}
          aria-label="Primary navigation"
        >
          <div className="header-dropdown__main">
            <span className="header-dropdown__eyebrow">Explore XOFOZ</span>
            {navItems.map((item, index) => item.children.length === 0 ? (
              <Link
                className={activeMenu === index ? "is-active" : ""}
                href={item.href}
                key={item.label}
                onMouseEnter={() => setActiveMenu(index)}
                onFocus={() => setActiveMenu(index)}
                onClick={() => setIsOpen(false)}
              >
                <small>0{index + 1}</small>
                <span>{item.label}</span>
                <b aria-hidden="true">↗</b>
              </Link>
            ) : (
              <button
                className={activeMenu === index ? "is-active" : ""}
                type="button"
                key={item.label}
                onMouseEnter={() => setActiveMenu(index)}
                onFocus={() => setActiveMenu(index)}
                onClick={() => setActiveMenu(index)}
              >
                <small>0{index + 1}</small>
                <span>{item.label}</span>
                <b aria-hidden="true">→</b>
              </button>
            ))}
          </div>
          <div className="header-dropdown__subnav">
            <span className="header-dropdown__eyebrow">{navItems[activeMenu].label}</span>
            {navItems[activeMenu].label !== "Services" && navItems[activeMenu].label !== "Solutions" && navItems[activeMenu].label !== "Products" && (
              <Link className="header-dropdown__all" href={navItems[activeMenu].href} onClick={() => setIsOpen(false)}>
                View all {navItems[activeMenu].label.toLowerCase()} <span>↗</span>
              </Link>
            )}
            {navItems[activeMenu].label === "Products" && (
              <>
                <p className="header-dropdown__summary">
                  Explore genuine IT products from authorised brands, supplied and supported by our Abu Dhabi team.
                </p>
                <div className="header-product-logos" aria-label="Product brands">
                  {productMenuBrands.map(([name, logo]) => (
                    <span key={name}>
                      <Image src={logo} alt={name} width={120} height={42} />
                    </span>
                  ))}
                </div>
                <Link className="header-dropdown__all header-products-link" href="/products" onClick={() => setIsOpen(false)}>
                  Explore all products <span>↗</span>
                </Link>
              </>
            )}
            <div>
              {navItems[activeMenu].children.map((child) => (
              <Link
                href={
                  navItems[activeMenu].label === "Services"
                    ? `/services/${serviceCategories.find((category) => category.label === child)?.slug}`
                    : navItems[activeMenu].label === "Solutions"
                      ? solutionNavItems.find((solution) => solution.label === child)?.href || "/solutions"
                    : navItems[activeMenu].label === "Industries"
                      ? industryNavItems.find((industry) => industry.label === child)?.href || "/industries"
                    : navItems[activeMenu].href
                }
                key={child}
                onClick={() => setIsOpen(false)}
              >
                <span>{child}</span><b aria-hidden="true">↗</b>
              </Link>
              ))}
            </div>
          </div>
          <div className="header-dropdown__visual" key={navItems[activeMenu].label}>
            <img src={navItems[activeMenu].image} alt="" aria-hidden="true" />
            <div>
              <span>XOFOZ / {navItems[activeMenu].label}</span>
              <p>{navItems[activeMenu].description}</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
