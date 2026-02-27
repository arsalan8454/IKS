import "../styles/mindmap.css";

export default function MindMap() {
  return (
    <section id="mindmap" className="mindmap-section">

        <div className="mindmap-header">
        <h2>Structural Dimensions of Education</h2>
        <p>
          A comparative exploration of foundational philosophy,
          instructional practice, and institutional architecture
          across civilisational and contemporary systems.
        </p>
      </div>

      <div className="mindmap-grid">

        {/* PHILOSOPHIES */}
        <div className="mindmap-card">
          <div className="card-title">Philosophical Foundations</div>

          <div className="card-columns">

            <div className="column ancient">
              <h4>Heritage Model</h4>
              <ul>
                <li>Self-realisation as ultimate objective</li>
                <li>Moral cultivation before skill acquisition</li>
                <li>Knowledge intertwined with spirituality</li>
                <li>Duty-centered worldview</li>
                <li>Wisdom transmitted across generations</li>
                <li>Inner discipline over external validation</li>
                <li>Harmony between human and cosmos</li>
                <li>Learning as lifelong character shaping</li>
              </ul>
            </div>

            <div className="column modern">
              <h4>Contemporary Model</h4>
              <ul>
                <li>Outcome-oriented achievement metrics</li>
                <li>Scientific reasoning and validation</li>
                <li>Data-backed knowledge systems</li>
                <li>Global competitiveness mindset</li>
                <li>Innovation-driven thinking</li>
                <li>Individual performance optimisation</li>
                <li>Secular and interdisciplinary frameworks</li>
                <li>Education as socio-economic mobility</li>
              </ul>
            </div>

          </div>
        </div>

        {/* PEDAGOGY */}
        <div className="mindmap-card">
          <div className="card-title">Instructional Architecture</div>

          <div className="card-columns">

            <div className="column ancient">
              <h4>Heritage Model</h4>
              <ul>
                <li>Mentor-immersive apprenticeship</li>
                <li>Dialogic debate and reflective inquiry</li>
                <li>Memorisation with interpretive depth</li>
                <li>Nature-integrated experiential learning</li>
                <li>Observation-based skill refinement</li>
                <li>Collective living and shared duties</li>
                <li>Embodied learning practices</li>
                <li>Slow mastery over rapid completion</li>
              </ul>
            </div>

            <div className="column modern">
              <h4>Contemporary Model</h4>
              <ul>
                <li>Digital-first learning environments</li>
                <li>Adaptive algorithmic instruction</li>
                <li>Standardised modular curriculum</li>
                <li>Collaborative interdisciplinary projects</li>
                <li>Simulation and virtual laboratories</li>
                <li>Continuous assessment analytics</li>
                <li>Scalable online ecosystems</li>
                <li>Rapid certification pathways</li>
              </ul>
            </div>

          </div>
        </div>

        {/* INSTITUTIONS */}
        <div className="mindmap-card">
          <div className="card-title">Institutional Ecosystems</div>

          <div className="card-columns">

            <div className="column ancient">
              <h4>Heritage Model</h4>
              <ul>
                <li>Residential knowledge communities</li>
                <li>Learning embedded in daily life</li>
                <li>Decentralised scholarly networks</li>
                <li>Guru-led intellectual circles</li>
                <li>Community-sustained support</li>
                <li>Selective admission structures</li>
                <li>Scriptural preservation traditions</li>
                <li>Intergenerational transmission continuity</li>
              </ul>
            </div>

            <div className="column modern">
              <h4>Contemporary Model</h4>
              <ul>
                <li>Structured school-to-university pipeline</li>
                <li>Public and private institutional models</li>
                <li>Accreditation and regulatory frameworks</li>
                <li>Research-driven knowledge production</li>
                <li>International exchange ecosystems</li>
                <li>Credential-based validation systems</li>
                <li>Mass-access online platforms</li>
                <li>Industry-academic integration networks</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
    
  );
}