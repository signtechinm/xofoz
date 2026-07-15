"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";

const navItems = [
  {
    label: "Services", href: "/#services", image: "/services/managed-it-amc.png",
    description: "Reliable day-to-day technology ownership for UAE businesses.",
    children: ["Managed IT / AMC", "On-call IT support", "Cybersecurity", "Cloud & Microsoft 365", "Structured cabling", "CCTV & access control"],
  },
  {
    label: "Products", href: "/#products", image: "/pillars/authorised-it-products.png",
    description: "Genuine business technology, licensing, hardware, and security products.",
    children: ["Microsoft 365", "Tally Prime", "Acronis Backup", "Fortinet Firewalls", "ESET Endpoint", "Business Hardware"],
  },
  {
    label: "Solutions", href: "/#solutions", image: "/services/office-it-setup.png",
    description: "Complete solutions engineered around the real office requirement.",
    children: ["New office IT setup", "Office Wi-Fi", "Cloud migration", "Network infrastructure", "Meeting room & AV", "ERP implementation"],
  },
  {
    label: "Industries", href: "/#industries", image: "/backgrounds/core-capabilities-server-room.png",
    description: "Practical technology experience across major Abu Dhabi industries.",
    children: ["Construction", "Hospitality", "Healthcare", "Retail", "Professional services", "Warehousing & logistics"],
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

  return (
    <>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="header-start">
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
          <span className="header-menu-label">Menu</span>
        </div>

        <Link className="brand header-brand" href="/" aria-label="XOFOZ home">
          <BrandLogo />
        </Link>

        <div className="header-end">
          <a className="quick-call header-whatsapp" href="https://wa.me/971523554202">WhatsApp</a>
          <a className="quick-call header-quote" href="/#quote">Free quote</a>
        </div>
      </header>

      <div className={`header-dropdown ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
        <div
          className="header-dropdown__backdrop"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
        <nav className="header-dropdown__panel" aria-label="Primary navigation">
          <div className="header-dropdown__main">
            <span className="header-dropdown__eyebrow">Explore XOFOZ</span>
            {navItems.map((item, index) => (
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
            <Link className="header-dropdown__all" href={navItems[activeMenu].href} onClick={() => setIsOpen(false)}>
              View all {navItems[activeMenu].label.toLowerCase()} <span>↗</span>
            </Link>
            <div>
              {navItems[activeMenu].children.map((child) => (
              <Link
                href={navItems[activeMenu].href}
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
