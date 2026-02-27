import "../styles/hero.css";

export default function HeroSection() {
  return (
    <section className="hero">

      <div className="panel left">
        <div className="inner">
          <h1>
            Ancient Education
          </h1>

          <p className="subtitle">
            Knowledge was cultivated through discipline, immersion,
            and moral responsibility — shaping character before career.
          </p>

          <button className="btn left-btn">
            Traditional Knowledge Era
          </button>
        </div>
      </div>

      <div className="panel right">
        <div className="inner">
          <h1>
            Modern Education
          </h1>

          <p className="subtitle">
            Learning engineered for scalability, performance metrics,
            and global digital infrastructure.
          </p>

          <button className="btn right-btn">
            Technological Knowledge Age
          </button>
        </div>
      </div>

      <div className="divider-line"></div>

      <div className="vs-badge">
        VS
      </div>

    </section>
  );
}