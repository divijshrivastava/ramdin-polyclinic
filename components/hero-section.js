import { heroMetrics, mobileServices } from "../lib/site-data";
import { Reveal } from "./reveal";

export function HeroSection() {
  return (
    <section className="hero section" id="home" data-section>
      <Reveal className="hero-copy">
        <p className="eyebrow">36-Year Legacy In Andheri</p>
        <h1>A sanctuary of clinical precision, community trust, and calm patient care.</h1>
        <p className="hero-text">
          Dr. Ramdin&apos;s Polyclinic brings specialties, diagnostics, and patient support into
          one contemporary care environment designed around clarity, dignity, and continuity.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#appointment">
            Schedule a Visit
          </a>
          <a className="button button-secondary" href="#specialties">
            Explore Services
          </a>
        </div>

        <dl className="hero-metrics">
          {heroMetrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.value}</dt>
              <dd>{metric.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mobile-service-rail">
          <div className="mobile-service-rail__header">
            <p className="eyebrow eyebrow-muted">Core Services</p>
            <a href="#specialties">View all</a>
          </div>
          <div className="mobile-service-rail__cards">
            {mobileServices.map((service) => (
              <article key={service.title} className="mobile-service-card">
                <span>{service.title}</span>
                <small>{service.subtitle}</small>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="hero-visual">
        <div className="hero-panel glass-card">
          <div className="hero-image-wrap">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4WRMfleHqSDBuRsTacdooMECi6o7sKcFCPIsHnDalYg4mRGfpxrhwRSvHzPbvlAE52rUOjIuZtLT-eUJ2aKEkSKQWmVJImK_hZ4dO5_rW00vhF0jfHTwbcoJYHBDHc_7RmmPJuJ49S5R1N7D028AlBBup9SXId1yCmjyUwhTniPwNVLM1KPE7x6RafEqzu7SAKR7WoimGsKzdSkiM2P2KbTNLgBBD5hczbFMrrTjHPuOWpmDNBnJwm-iuy6Wl5zjfB_riO_pcMQ"
              alt="Interior of a premium clinic corridor"
            />
          </div>
          <div className="hero-note">
            <span>Clinical Sanctuary</span>
            <p>
              A tonal editorial interface inspired by the Stitch design system and the
              clinic&apos;s premium care positioning.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
