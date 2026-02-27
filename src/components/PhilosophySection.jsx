import "../styles/philosophy.css";

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="ph-section">

      <div className="ph-header">
        <h2>Ideological Foundations</h2>
        <p>
          The philosophical undercurrents shaping educational identity,
          authority, and human development across eras.
        </p>
      </div>

      <div className="ph-grid">

        {/* Ancient Block 1 */}
        <div className="ph-card ancient">
          <span className="ph-tag">Ancient — Metaphysics</span>
          <h3>Unity of Knowledge</h3>
          <p>
            Learning was not fragmented into subjects but perceived as an
            interconnected web of existence — ethics, astronomy, medicine,
            art, and spirituality formed a seamless continuum.
          </p>
        </div>

        {/* Ancient Block 2 */}
        <div className="ph-card ancient">
          <span className="ph-tag">Ancient — Discipline</span>
          <h3>Inner Cultivation</h3>
          <p>
            Education emphasised mastery over the self before mastery over
            the world. Silence, reflection, and austerity were considered
            prerequisites for intellectual depth.
          </p>
        </div>

        {/* Ancient Block 3 */}
        <div className="ph-card ancient">
          <span className="ph-tag">Ancient — Community</span>
          <h3>Collective Responsibility</h3>
          <p>
            Knowledge was preserved and transmitted as a sacred trust.
            The learner’s growth was intertwined with the wellbeing of
            society and cosmic order.
          </p>
        </div>

        {/* Modern Block 1 */}
        <div className="ph-card modern">
          <span className="ph-tag">Modern — Rationalism</span>
          <h3>Evidence & Verification</h3>
          <p>
            Contemporary systems prioritise empirical validation,
            peer-reviewed frameworks, and reproducibility as markers
            of credible knowledge.
          </p>
        </div>

        {/* Modern Block 2 */}
        <div className="ph-card modern">
          <span className="ph-tag">Modern — Efficiency</span>
          <h3>Outcome Optimization</h3>
          <p>
            Structured curricula, measurable performance metrics,
            and scalability ensure education aligns with economic
            and technological acceleration.
          </p>
        </div>

        {/* Modern Block 3 */}
        <div className="ph-card modern">
          <span className="ph-tag">Modern — Accessibility</span>
          <h3>Democratised Learning</h3>
          <p>
            Digital infrastructures and open knowledge platforms
            enable global participation, reducing geographical and
            institutional barriers.
          </p>
        </div>

      </div>

    </section>
  );
}