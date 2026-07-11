import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <Link className="footer-brand" href="/">
            <img
              src="/brand/xofoz-logo.png"
              alt="XOFOZ logo"
            />
          </Link>
          <p>
            XOFOZ Information Technology provides managed IT support,
            infrastructure setup, cybersecurity, and business technology services
            in Abu Dhabi and across the UAE.
          </p>
        </div>
        <div>
          <h2>Pages</h2>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h2>Services</h2>
          <span>IT AMC</span>
          <span>On-Call Support</span>
          <span>Office IT Setup</span>
          <span>Cybersecurity</span>
        </div>
        <div>
          <h2>Contact</h2>
          <a href="tel:026220071">026 220 071</a>
          <a href="mailto:hello@xofoz.com">hello@xofoz.com</a>
          <span>Office No: M01, Shabia-10, Abu Dhabi</span>
          <span>Mon-Sat: 8:30 AM to 6:30 PM</span>
        </div>
        <div className="footer-bottom">
          <span>Copyright &copy; 2026 XOFOZ. All rights reserved.</span>
          <Link href="/contact">Need IT support?</Link>
        </div>
      </div>
    </footer>
  );
}
