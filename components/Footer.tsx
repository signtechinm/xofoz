import Link from "next/link";
import BrandLogo from "./BrandLogo";

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
            <a href="https://wa.me/971523554202">WhatsApp us</a>
          </div>
        </div>

        <div className="footer-overview">
          <Link className="footer-brand" href="/">
            <BrandLogo />
          </Link>
          <p>
            Abu Dhabi&apos;s IT solutions company since 2016, delivering managed
            services, technology products, and complete office solutions to UAE businesses.
          </p>
          <div className="footer-contact-chips">
            <a href="mailto:hello@xofoz.com">hello@xofoz.com</a>
            <a href="tel:026220071">026 220 071</a>
          </div>
        </div>
        <div className="footer-column">
          <h2>Services</h2>
          <Link href="/#services">IT AMC</Link>
          <Link href="/#services">Network infrastructure</Link>
          <Link href="/#services">Cybersecurity</Link>
          <Link href="/#services">Cloud &amp; Microsoft 365</Link>
          <Link href="/#services">CCTV &amp; access control</Link>
          <Link href="/#services">Website development</Link>
        </div>
        <div className="footer-column">
          <h2>Products</h2>
          <Link href="/#products">Tally Prime</Link>
          <Link href="/#products">Microsoft 365</Link>
          <Link href="/#products">Acronis backup</Link>
          <Link href="/#products">Fortinet firewall</Link>
          <Link href="/#products">Hikvision CCTV</Link>
          <Link href="/#products">ESET endpoint</Link>
        </div>
        <div className="footer-column">
          <h2>Solutions</h2>
          <Link href="/#solutions">CCTV installation</Link>
          <Link href="/#solutions">Office Wi-Fi setup</Link>
          <Link href="/#solutions">IT troubleshooting</Link>
          <Link href="/#solutions">Cloud migration</Link>
          <Link href="/#solutions">New office IT setup</Link>
          <Link href="/#solutions">ERP implementation</Link>
        </div>
        <div className="footer-column">
          <h2>Company</h2>
          <Link href="/about">About XOFOZ</Link>
          <Link href="/#testimonials">Client feedback</Link>
          <Link href="/#industries">Industries</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div className="footer-bottom">
          <span>Copyright &copy; 2026 XOFOZ Information Technology LLC. All rights reserved. Abu Dhabi, UAE.</span>
          <div><Link href="/about">About</Link><Link href="/contact">Contact</Link><a href="#">Back to top ↑</a></div>
        </div>
      </div>
    </footer>
  );
}
