import "../styles/Lines.css";

export default function Lines() {
  return (
    <section id="mindmap" className="mindmap-section">

      <div className="mindmap-header">
        <h2>Conceptual Framework</h2>
        <p>
          A structural contrast between heritage-based knowledge
          systems and performance-driven education models.
        </p>
      </div>

      <div className="mindmap-wrapper">

        {/* Center Core */}
        <div className="core-node">
          Learning Paradigm
        </div>

        {/* LEFT SIDE */}
        <div className="cluster left-cluster">
          <div className="node warm">Ethical Formation</div>
          <div className="node warm">Experiential Discipline</div>
          <div className="node warm">Oral Knowledge Transmission</div>
          <div className="node warm">Community-rooted Learning</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="cluster right-cluster">
          <div className="node cool">Data-driven Evaluation</div>
          <div className="node cool">Digital Knowledge Access</div>
          <div className="node cool">Scalable Curriculum Systems</div>
          <div className="node cool">Global Skill Alignment</div>
        </div>

        {/* Connector Lines */}
        <div className="connector left-line"></div>
        <div className="connector right-line"></div>

      </div>

    </section>
  );
}