"use client";

import { useEffect, useState } from "react";
import { mobileTabLinks, navigationLinks } from "../lib/site-data";

const sectionIds = ["home", "specialties", "diagnostics", "patient-info"];

export function Navigation() {
  const [activeHref, setActiveHref] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: 0.1,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", mobileMenuOpen);

    return () => document.body.classList.remove("mobile-menu-open");
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavClick = (href) => {
    setActiveHref(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="mobile-appbar">
        <div className="mobile-appbar__left">
          <button
            className="icon-button"
            type="button"
            aria-label="Open navigation"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            ≡
          </button>
          <span className="mobile-appbar__title">Dr. Ramdin&apos;s Polyclinic</span>
        </div>
        <div className="mobile-appbar__avatar" aria-hidden="true">
          DRP
        </div>
      </header>

      <button
        className={`mobile-menu-backdrop ${mobileMenuOpen ? "is-open" : ""}`}
        hidden={!mobileMenuOpen}
        aria-label="Close navigation"
        onClick={() => setMobileMenuOpen(false)}
      />

      <aside
        className={`mobile-menu ${mobileMenuOpen ? "is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu__header">
          <div>
            <p className="eyebrow eyebrow-muted">Navigation</p>
            <h2>Explore the clinic</h2>
          </div>
          <button
            className="icon-button"
            type="button"
            aria-label="Close navigation"
            onClick={() => setMobileMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="mobile-menu__nav" aria-label="Mobile sections">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeHref === link.href ? "is-active" : ""}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </a>
          ))}
          <a href="#appointment" onClick={() => setMobileMenuOpen(false)}>
            Book Appointment
          </a>
        </nav>
      </aside>

      <header className="site-header">
        <a className="brand" href="#home" onClick={() => handleNavClick("#home")}>
          <span className="brand-kicker">Since 1988</span>
          <span className="brand-name">Dr. Ramdin&apos;s Polyclinic</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeHref === link.href ? "is-active" : ""}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="button button-primary header-cta" href="#appointment">
          Book Appointment
        </a>
      </header>

      <nav className="mobile-tabbar" aria-label="Mobile">
        {mobileTabLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`mobile-tabbar__item ${activeHref === link.href ? "is-active" : ""}`}
            onClick={() => handleNavClick(link.href)}
          >
            <span>{link.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
