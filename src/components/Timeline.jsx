import "../styles/timeline.css";

export default function Timeline() {
  return (
    <section id="timeline" className="tl-section">

      <div className="tl-header">
        <h2>Evolutionary Milestones</h2>
        <p>
          Transformational shifts that redefined educational
          systems across time.
        </p>
      </div>

      <div className="tl-container">

        <div className="tl-item">
          <div className="tl-content left">
            <span className="tl-date">c. 1500 BCE</span>
            <h3>Early Residential Learning</h3>
            <p>Forest-based mentorship systems focused on discipline and oral mastery.</p>
          </div>
          <div className="tl-dot"></div>
        </div>

        <div className="tl-item">
          <div className="tl-content right">
            <span className="tl-date">19th Century</span>
            <h3>Institutional Standardisation</h3>
            <p>Formal curricula and examinations restructured education.</p>
          </div>
          <div className="tl-dot"></div>
        </div>

        <div className="tl-item">
          <div className="tl-content left">
            <span className="tl-date">Mid-20th Century</span>
            <h3>Mass Education Expansion</h3>
            <p>Public universities and national schooling initiatives expanded access.</p>
          </div>
          <div className="tl-dot"></div>
        </div>

        <div className="tl-item">
          <div className="tl-content right">
            <span className="tl-date">21st Century</span>
            <h3>Digital & AI Integration</h3>
            <p>Adaptive algorithms and cloud systems transformed learning globally.</p>
          </div>
          <div className="tl-dot"></div>
        </div>

      </div>

    </section>
  );
}