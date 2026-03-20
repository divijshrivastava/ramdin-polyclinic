"use client";

import { useState } from "react";
import {
  diagnosticJourney,
  diagnosticsCards,
  labGroups,
} from "../lib/site-data";
import { Reveal } from "./reveal";

export function DiagnosticsSection() {
  const [activeLabTab, setActiveLabTab] = useState(labGroups[0].id);

  return (
    <section className="section diagnostics-section" id="diagnostics" data-section>
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">Diagnostic Excellence</p>
          <h2>Precision is the foundation of every successful healing journey.</h2>
        </div>
        <p>
          This area combines the Stitch diagnostics hero, charitable blood-service emphasis,
          and a structured laboratory menu into a single responsive system.
        </p>
      </Reveal>

      <div className="diagnostic-bento">
        {diagnosticsCards.map((card) => (
          <Reveal
            key={card.title}
            as="article"
            className={`bento-card ${
              card.tone === "wide"
                ? "bento-wide"
                : card.tone === "primary"
                  ? "bento-primary"
                  : card.tone === "accent"
                    ? "bento-accent"
                    : ""
            }`}
          >
            {card.tag ? <span className="card-tag card-tag-warm">{card.tag}</span> : null}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            {card.bullets ? (
              <ul>
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        ))}
      </div>

      <Reveal className="journey-grid">
        {diagnosticJourney.map((step) => (
          <article key={step.step}>
            <span>{step.step}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </Reveal>

      <Reveal className="lab-menu">
        <div className="lab-menu-header">
          <div>
            <p className="eyebrow eyebrow-muted">Laboratory Menu</p>
            <h3>Structured test groups for quick scanning.</h3>
          </div>
          <div className="chip-row">
            {labGroups.map((group) => (
              <button
                key={group.id}
                className={`chip ${activeLabTab === group.id ? "is-active" : ""}`}
                type="button"
                onClick={() => setActiveLabTab(group.id)}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>

        <div className="lab-panels">
          {labGroups.map((group) => (
            <div
              key={group.id}
              className={`lab-panel ${activeLabTab === group.id ? "is-active" : ""}`}
            >
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <strong>{item.status}</strong>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
