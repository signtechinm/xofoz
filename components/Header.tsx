"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { serviceCategories } from "../data/service-categories";
import { solutionNavItems } from "../data/solutions";
import { industryNavItems } from "../data/industries";
import { productBrandClassName, productBrandLogos } from "../data/product-brand-logos";
import BrandLogo from "./BrandLogo";

type ServiceMenuLink = { label: string; href?: string };

const serviceMenuDefinitions: Record<string, ServiceMenuLink[]> = {
  "it-services": [
    { label: "Managed IT Services" }, { label: "IT Support", href: "/services/it-support-abu-dhabi" },
    { label: "Remote IT Support", href: "/services/remote-it-support-abu-dhabi" },
    { label: "IT Relocation" }, { label: "IT Consulting" }, { label: "ICT Solutions" },
    { label: "IT AMC", href: "/services/it-amc-abu-dhabi" },
    { label: "New Office IT Setup", href: "/services/office-it-setup-abu-dhabi" },
    { label: "Cloud Migration Services" }, { label: "IT Outsourcing" },
  ],
  "cyber-security": [
    { label: "Cybersecurity Solutions", href: "/services/cybersecurity-solutions-abu-dhabi" },
    { label: "Endpoint Security" }, { label: "Device Encryption" }, { label: "Identity and Access Management" },
    { label: "SOC as a Service" }, { label: "Next Gen Firewall" }, { label: "Email Security" },
    { label: "Vulnerability Management" }, { label: "Enterprise Mobility" },
  ],
  "data-backup-protection": [
    { label: "DLP Solution" },
    { label: "Disaster Recovery Solutions", href: "/services/data-backup-recovery-abu-dhabi" },
    { label: "Device Management" }, { label: "Business Continuity Plan" },
    { label: "Backup as a Service" }, { label: "Mobile Device Management" },
  ],
  "server-storage": [
    { label: "Server Solutions", href: "/services/server-management-abu-dhabi" },
    { label: "NAS Storage" }, { label: "Server Storage" }, { label: "Synchronized Data Storage" },
  ],
  "network-solutions": [
    { label: "Network Solutions", href: "/services/network-infrastructure-abu-dhabi" },
    { label: "Switching and Routing" }, { label: "Proxy Services" },
    { label: "Structured Cabling", href: "/services/structured-cabling-abu-dhabi" },
    { label: "WiFi Solutions" }, { label: "VPN Solutions", href: "/services/vpn-network-security-abu-dhabi" },
    { label: "Work From Home IT" },
  ],
  "communication-lv": [
    { label: "CCTV Solutions", href: "/services/cctv-access-control-abu-dhabi" },
    { label: "Access Control" }, { label: "Biometric Attendance System", href: "/services/biometric-systems-abu-dhabi" },
    { label: "IP Phone Solutions", href: "/services/pabx-telephone-systems-abu-dhabi" },
    { label: "Call Centre Solutions" }, { label: "Intercom Systems" }, { label: "ELV Systems" },
    { label: "Guard Tour System" }, { label: "Environment Monitoring System" },
    { label: "Solar Solutions for CCTV and WiFi" }, { label: "Gate Barrier Solutions" },
    { label: "AV System", href: "/services/hardware-av-solutions-abu-dhabi" },
    { label: "PA System" }, { label: "LED Panel" }, { label: "Master Clock System" },
    { label: "Video Conferencing", href: "/services/video-conferencing-abu-dhabi" },
  ],
  cloud: [
    { label: "Azure Cloud Solutions" }, { label: "AWS Cloud Services", href: "/services/aws-cloud-services-abu-dhabi" }, { label: "Web Hosting" },
    { label: "Desktop as a Service" }, { label: "User Collaboration Tools" },
  ],
  "software-solutions": [
    { label: "ERP Software", href: "/services/erp-solutions-abu-dhabi" },
    { label: "POS Software Solutions", href: "/services/pos-systems-abu-dhabi" },
    { label: "GPS Tracking Solutions" }, { label: "Visitor Management System" },
    { label: "Web Design", href: "/services/website-development-abu-dhabi" }, { label: "Design Software" },
    { label: "Tally Prime", href: "/tally-prime-software-abu-dhabi" },
  ],
  "microsoft-cloud": [
    { label: "Microsoft 365 Solutions", href: "/services/cloud-solutions-microsoft-365-abu-dhabi" },
    { label: "Microsoft 365 Copilot" }, { label: "Microsoft 365 Apps and Services" },
    { label: "Microsoft Edge for Business" }, { label: "Windows 365 Cloud PC" },
    { label: "Microsoft 365 Benefits" }, { label: "Microsoft 365 Pricing Plans" },
    { label: "Microsoft 365 Security" }, { label: "Microsoft 365 Migrations and Consultancy" },
    { label: "Microsoft Modern Workplace" }, { label: "Microsoft SharePoint Consulting" },
  ],
};

const toServiceAnchor = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const serviceMenuGroups = serviceCategories.map((category) => ({
  category,
  services: (serviceMenuDefinitions[category.slug] || []).map((service) => ({
    ...service,
    href: service.href || `/services/${category.slug}#${toServiceAnchor(service.label)}`,
  })),
}));

const serviceMenuColumns = [
  ["it-services", "data-backup-protection", "microsoft-cloud"],
  ["cyber-security", "server-storage"],
  ["network-solutions", "software-solutions"],
  ["communication-lv"],
].map((slugs) => slugs.map((slug) => serviceMenuGroups.find((group) => group.category.slug === slug)!));

const supplementalServiceGroups = {
  3: serviceMenuGroups.filter((group) => group.category.slug === "cloud"),
} as const;

const newServiceLinks = [
  { label: "Chip-Level Repair", href: "/services/chip-level-repair-abu-dhabi" },
  { label: "Data Recovery", href: "/services/data-recovery-abu-dhabi" },
  { label: "ADHICS Compliance Services", href: "/services/adhics-compliance-services-abu-dhabi" },
  { label: "Malaffi Integration", href: "/services/malaffi-integration-abu-dhabi" },
  { label: "AWS Cloud Services", href: "/services/aws-cloud-services-abu-dhabi" },
];

const navItems = [
  {
    label: "Services", href: "/services", image: "/services/managed-it-amc.png",
    description: "Reliable day-to-day technology ownership for UAE businesses.",
    children: serviceCategories.filter((category) => category.slug !== "ai-solutions").map((category) => category.label),
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
  const serviceHoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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

  useEffect(() => () => {
    if (serviceHoverTimerRef.current) clearTimeout(serviceHoverTimerRef.current);
  }, []);

  const openServiceDropdown = (element: HTMLDetailsElement) => {
    if (serviceHoverTimerRef.current) clearTimeout(serviceHoverTimerRef.current);
    serviceHoverTimerRef.current = setTimeout(() => { element.open = true; }, 120);
  };

  const closeServiceDropdown = (element: HTMLDetailsElement) => {
    if (serviceHoverTimerRef.current) clearTimeout(serviceHoverTimerRef.current);
    serviceHoverTimerRef.current = setTimeout(() => { element.open = false; }, 160);
  };

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
            href="https://wa.me/971528209231"
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
            navItems[activeMenu].label === "Services" ? "header-dropdown__panel--services" :
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
            {navItems[activeMenu].label === "Services" && (
              <>
                <section className="header-service-groups" aria-label="Service categories and specialist services">
                  {serviceMenuColumns.map((column, index) => (
                    <div className="header-service-column" key={`service-column-${index + 1}`}>
                      {column.map((group) => (
                        <details
                          className="header-service-group"
                          name="service-menu-category"
                          key={group.category.slug}
                          onMouseEnter={(event) => openServiceDropdown(event.currentTarget)}
                          onMouseLeave={(event) => closeServiceDropdown(event.currentTarget)}
                        >
                          <summary className="header-service-group__title">
                            <span>{group.category.shortLabel}</span><b aria-hidden="true">⌄</b>
                          </summary>
                          <div className="header-service-group__links">
                            <Link className="header-service-group__overview" href={`/services/${group.category.slug}`} onClick={() => setIsOpen(false)}>
                              {group.category.shortLabel} overview <b aria-hidden="true">→</b>
                            </Link>
                            {group.services.map((service) => (
                              <Link href={service.href} key={`${group.category.slug}-${service.label}`} onClick={() => setIsOpen(false)}>
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        </details>
                      ))}
                    </div>
                  ))}
                </section>
                <section className="header-standalone-services" aria-label="Cloud and specialist service links">
                  {supplementalServiceGroups[3].map((group) => (
                    <details className="header-service-group" name="service-menu-category" key={group.category.slug} onMouseEnter={(event) => openServiceDropdown(event.currentTarget)} onMouseLeave={(event) => closeServiceDropdown(event.currentTarget)}>
                      <summary className="header-service-group__title"><span>{group.category.shortLabel}</span><b aria-hidden="true">⌄</b></summary>
                      <div className="header-service-group__links">
                        <Link className="header-service-group__overview" href={`/services/${group.category.slug}`} onClick={() => setIsOpen(false)}>{group.category.shortLabel} overview <b aria-hidden="true">→</b></Link>
                        {group.services.map((service) => <Link href={service.href} key={`${group.category.slug}-${service.label}`} onClick={() => setIsOpen(false)}>{service.label}</Link>)}
                      </div>
                    </details>
                  ))}
                  {newServiceLinks.map((service) => (
                    <Link className="header-service-group header-service-group--direct-link" href={service.href} key={service.href} onClick={() => setIsOpen(false)}>
                      <span className="header-service-group__title"><span>{service.label}</span><b aria-hidden="true">↗</b></span>
                    </Link>
                  ))}
                </section>
              </>
            )}
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
                  {productBrandLogos.map(([name, logo]) => (
                    <span className={productBrandClassName(name)} key={name}>
                      <Image src={logo} alt={name} width={120} height={42} unoptimized />
                    </span>
                  ))}
                </div>
                <Link className="header-dropdown__all header-products-link" href="/products" onClick={() => setIsOpen(false)}>
                  Explore all products <span>↗</span>
                </Link>
              </>
            )}
            {navItems[activeMenu].label !== "Services" && <div>
              {navItems[activeMenu].children.map((child) => {
                const href = navItems[activeMenu].label === "Solutions"
                  ? solutionNavItems.find((solution) => solution.label === child)?.href || "/solutions"
                  : navItems[activeMenu].label === "Industries"
                    ? industryNavItems.find((industry) => industry.label === child)?.href || "/industries"
                    : navItems[activeMenu].href;
                const link = <Link href={href} onClick={() => setIsOpen(false)}><span>{child}</span><b aria-hidden="true">↗</b></Link>;

                return navItems[activeMenu].label === "Solutions" && child === "TallyPrime Software" ? (
                  <div className="header-solution-family" key={child}>
                    {link}
                    <Link className="header-solution-child" href="/tally-prime-software-abu-dhabi/e-invoicing-uae-abu-dhabi" onClick={() => setIsOpen(false)}>
                      <span>UAE e-Invoicing</span><b aria-hidden="true">↗</b>
                    </Link>
                  </div>
                ) : <span className="header-subnav-item" key={child}>{link}</span>;
              })}
            </div>}
          </div>
          {navItems[activeMenu].label !== "Services" && <div className="header-dropdown__visual" key={navItems[activeMenu].label}>
            <img src={navItems[activeMenu].image} alt="" aria-hidden="true" />
            <div>
              <span>XOFOZ / {navItems[activeMenu].label}</span>
              <p>{navItems[activeMenu].description}</p>
            </div>
          </div>}
        </nav>
      </div>
    </>
  );
}
