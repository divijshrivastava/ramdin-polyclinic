"use client";

import { useState } from "react";
import {
  specialtyCards,
  specialtyFeatures,
  specialtyFilters,
} from "../lib/site-data";
import { Reveal } from "./reveal";

export function SpecialtiesSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const visibleFeatures = specialtyFeatures.filter(
    (item) => selectedFilter === "all" || item.category === selectedFilter,
  );

  const visibleCards = specialtyCards.filter(
    (item) => selectedFilter === "all" || item.category === selectedFilter,
  );

  return (
    <section className="section" id="specialties" data-section>
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">Specialties &amp; Services</p>
          <h2>Leading specialists under one calm, coordinated roof.</h2>
        </div>
        <p>
          Built from the Stitch specialties screen, this section groups high-attention
          consultations with compact cards for the broader service catalogue.
        </p>
      </Reveal>

      <div className="chip-row" role="tablist" aria-label="Specialty filters">
        {specialtyFilters.map((filter) => (
          <button
            key={filter.value}
            className={`chip ${selectedFilter === filter.value ? "is-active" : ""}`}
            type="button"
            onClick={() => setSelectedFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="specialty-layout">
        {visibleFeatures.map((feature) => (
          <Reveal key={feature.title} as="article" className="feature-card">
            <img src={feature.image} alt={feature.alt} />
            <div>
              <span className="card-tag">{feature.tag}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href="#appointment">Book consultation</a>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="compact-grid">
        {visibleCards.map((card) => (
          <Reveal key={card.title} as="article" className="compact-card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </Reveal>
        ))}
      </div>

      <Reveal as="article" className="cta-band">
        <div>
          <p className="eyebrow eyebrow-dark">Rehabilitation</p>
          <h3>Physiotherapy &amp; rehabilitation for recovery that lasts.</h3>
          <p>
            Personalized manual therapy and exercise-led recovery programs help patients
            restore mobility, reduce pain, and regain confidence.
          </p>
        </div>
        <a className="button button-light" href="#appointment">
          Book physiotherapy
        </a>
      </Reveal>
    </section>
  );
}
