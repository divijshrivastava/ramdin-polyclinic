import { stories } from "../lib/site-data";
import { Reveal } from "./reveal";

export function StoriesSection() {
  return (
    <section className="section stories-section" aria-labelledby="stories-heading">
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">Patient Stories</p>
          <h2 id="stories-heading">
            Generations of families still describe the clinic the same way: calm, precise, and
            deeply human.
          </h2>
        </div>
        <p>
          Pulled from the latest Stitch home variants, these testimonials now anchor the trust
          layer of the site on both desktop and mobile.
        </p>
      </Reveal>

      <div className="stories-grid">
        {stories.map((story) => (
          <Reveal
            key={story.author}
            as="article"
            className={`story-card ${story.featured ? "story-card--featured" : ""}`}
          >
            <div className="story-stars" aria-hidden="true">
              ★★★★★
            </div>
            <p>{story.quote}</p>
            <div className="story-author">
              <strong>{story.author}</strong>
              <span>{story.detail}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
