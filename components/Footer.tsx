import Link from "next/link";
import { serviceCategoryNavItems } from "../data/service-categories";
import { solutionNavItems } from "../data/solutions";
import BrandLogo from "./BrandLogo";

const footerProducts = [
  { title: "Firewall", href: "/solutions/cybersecurity" },
  { title: "Video conferencing", href: "/services/communication-lv#av-system" },
  { title: "Access points", href: "/services/network-solutions#wifi-solutions" },
  { title: "CCTV systems", href: "/services/communication-lv#cctv-solutions" },
  { title: "Attendance and access control", href: "/services/communication-lv#biometric-attendance-system" },
  { title: "Accounting software", href: "/tally-prime-software-abu-dhabi" },
  { title: "IP PBX and telephone systems", href: "/services/communication-lv#ip-phone-solutions" },
] as const;

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-karma" aria-hidden="true">
        <span className="footer-karma__symbol">
          <svg viewBox="0 0 100 100" role="presentation">
            <defs>
              <linearGradient id="footer-karma-blue" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#1b76e8" />
                <stop offset="1" stopColor="#03152f" />
              </linearGradient>
              <linearGradient id="footer-karma-silver" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="0.52" stopColor="#aebdce" />
                <stop offset="1" stopColor="#eef6ff" />
              </linearGradient>
              <clipPath id="footer-karma-clip"><circle cx="50" cy="50" r="49" /></clipPath>
            </defs>
            <g clipPath="url(#footer-karma-clip)">
              <circle cx="50" cy="50" r="50" fill="url(#footer-karma-blue)" />
              <path d="M50 0A50 50 0 0 0 50 100A25 25 0 0 0 50 50A25 25 0 0 1 50 0Z" fill="url(#footer-karma-silver)" />
              <circle cx="50" cy="25" r="7" fill="#f5f9ff" />
              <circle cx="50" cy="75" r="7" fill="#061225" />
            </g>
            <circle cx="50" cy="50" r="48.5" fill="none" stroke="rgba(234,244,255,0.72)" strokeWidth="1.5" />
          </svg>
        </span>
      </div>
      <div className="footer-karma-magic" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="site-footer__inner">
        <div className="footer-cta">
          <div>
            <span>Need reliable IT support?</span>
            <h2>Let&apos;s build a more secure, connected business.</h2>
          </div>
          <div className="footer-cta__actions">
            <Link href="/contact#consultation">Start a conversation <span aria-hidden="true">→</span></Link>
            <a href="https://wa.me/971528209231">WhatsApp us</a>
          </div>
        </div>

        <div className="footer-overview">
          <Link className="footer-brand" href="/">
            <BrandLogo />
          </Link>
          <p>
            Abu Dhabi&apos;s trusted IT solutions provider since 2015, delivering
            managed IT services, genuine technology products, and complete
            business solutions across the UAE.
          </p>
          <div className="footer-contact-chips">
            <a href="mailto:hello@xofoz.com">hello@xofoz.com</a>
            <a href="tel:026220071">026 220 071</a>
          </div>
        </div>
        <div className="footer-column">
          <h2>Services</h2>
          {serviceCategoryNavItems.filter((service) => service.slug !== "ai-solutions").map((service) => (
            <Link href={service.href} key={service.slug}>{service.label}</Link>
          ))}
        </div>
        <div className="footer-column">
          <h2>Products</h2>
          {footerProducts.map((product) => (
            <Link href={product.href} key={product.title}>
              {product.title}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <h2>Solutions</h2>
          {solutionNavItems.map((solution) => (
            <Link href={solution.href} key={solution.slug}>{solution.label}</Link>
          ))}
        </div>
        <div className="footer-column">
          <h2>Company</h2>
          <Link href="/about">About XOFOZ</Link>
          <Link href="/#testimonials">Client feedback</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div className="footer-bottom">
          <span>Copyright &copy; 2026 XOFOZ Information Technology LLC. All rights reserved. Abu Dhabi, UAE.</span>
          <div><Link href="/about">About</Link><Link href="/contact">Contact</Link><a href="#top">Back to top ↑</a></div>
        </div>
      </div>
    </footer>
  );
}
