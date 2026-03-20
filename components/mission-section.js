import { Reveal } from "./reveal";

export function MissionSection() {
  return (
    <section className="section mission-grid">
      <Reveal className="surface-card mission-copy">
        <p className="eyebrow eyebrow-muted">Our Mission</p>
        <h2>Accessible, high-quality care with modern diagnostics at its core.</h2>
        <p>
          The clinic balances advanced clinical capability with a long-running charitable
          ethos, reducing friction for patients while supporting early diagnosis, senior
          specialist access, and strong continuity of care.
        </p>
      </Reveal>

      <Reveal className="impact-card">
        <span className="impact-stat">36+</span>
        <p>
          Years of service to the Andheri community with a patient-first operating model.
        </p>
      </Reveal>
    </section>
  );
}
