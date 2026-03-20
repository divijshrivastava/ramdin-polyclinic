import { footerLinks } from "../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="brand-name">Dr. Ramdin&apos;s Polyclinic</p>
        <p>
          A clinical sanctuary for specialty care, diagnostics, and patient support in
          Mumbai.
        </p>
      </div>
      <div className="footer-links">
        {footerLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
