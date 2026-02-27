import "../styles/comparison.css";

export default function ComparisonTable() {
  return (
    <section id="comparison" className="ct-section">

      <div className="ct-header">
        <h2>Comparative Dimensions</h2>
        <p>
          A structured examination of systemic contrasts across
          purpose, pedagogy, authority, and knowledge architecture.
        </p>
      </div>

      <div className="ct-table">

        {/* HEADER ROW */}
        <div className="ct-row ct-head">
          <div className="ct-col ct-category">Dimension</div>
          <div className="ct-col ct-ancient-head">Heritage Model</div>
          <div className="ct-col ct-modern-head">Contemporary Model</div>
        </div>

        {/* ROWS */}

        <div className="ct-row">
          <div className="ct-col ct-category">Primary Objective</div>
          <div className="ct-col ct-ancient">
            Formation of ethical selfhood and inner equilibrium.
          </div>
          <div className="ct-col ct-modern">
            Preparation for economic participation and innovation ecosystems.
          </div>
        </div>

        <div className="ct-row">
          <div className="ct-col ct-category">Nature of Knowledge</div>
          <div className="ct-col ct-ancient">
            Sacred, experiential, transmitted through lineage and lived insight.
          </div>
          <div className="ct-col ct-modern">
            Structured, codified, validated through research and replication.
          </div>
        </div>

        <div className="ct-row">
          <div className="ct-col ct-category">Learning Environment</div>
          <div className="ct-col ct-ancient">
            Immersive residential communities integrated with nature.
          </div>
          <div className="ct-col ct-modern">
            Institutional campuses, digital platforms, and virtual systems.
          </div>
        </div>

        <div className="ct-row">
          <div className="ct-col ct-category">Teacher Role</div>
          <div className="ct-col ct-ancient">
            Spiritual guide, moral authority, lifelong mentor.
          </div>
          <div className="ct-col ct-modern">
            Facilitator, evaluator, curriculum designer, performance coach.
          </div>
        </div>

        <div className="ct-row">
          <div className="ct-col ct-category">Assessment Logic</div>
          <div className="ct-col ct-ancient">
            Continuous observation, practical demonstration, character validation.
          </div>
          <div className="ct-col ct-modern">
            Standardised testing, grading systems, performance analytics.
          </div>
        </div>

        <div className="ct-row">
          <div className="ct-col ct-category">Access Model</div>
          <div className="ct-col ct-ancient">
            Selective participation influenced by social hierarchy.
          </div>
          <div className="ct-col ct-modern">
            Broad inclusion frameworks with policy-driven accessibility.
          </div>
        </div>

        <div className="ct-row">
          <div className="ct-col ct-category">Knowledge Transmission</div>
          <div className="ct-col ct-ancient">
            Oral tradition, memorisation, interpretive dialogue.
          </div>
          <div className="ct-col ct-modern">
            Digital repositories, cloud databases, global publication systems.
          </div>
        </div>

        <div className="ct-row">
          <div className="ct-col ct-category">Temporal Orientation</div>
          <div className="ct-col ct-ancient">
            Long-term self-mastery and spiritual continuity.
          </div>
          <div className="ct-col ct-modern">
            Short-cycle outputs aligned with market demands.
          </div>
        </div>

      </div>

    </section>
  );
}