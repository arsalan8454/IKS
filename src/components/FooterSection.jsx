import "../styles/footer.css";

export default function FooterSection() {
  return (
    <footer className="ft-section">

      <div className="ft-container">

        <div className="ft-topline">
          Crafted for <span>Comparative Education Studies</span> —
          Where Ancient Insight meets Intelligent Systems
        </div>

        <div className="ft-card">

          <div className="ft-left">
            <h3>Project Submission Details</h3>

            <div className="ft-detail">
              <span>Name</span>
              <p>Khan Mohd Arslan Mohd Ansar</p>
            </div>

            <div className="ft-detail">
              <span>Roll No</span>
              <p>25AI52</p>
            </div>

            <div className="ft-detail">
              <span>Branch</span>
              <p>AIML 1</p>
            </div>

            <div className="ft-detail">
              <span>Subject</span>
              <p>Indian Knowledge Systems (IKS)</p>
            </div>
          </div>

          <div className="ft-right">
            <h4>Project Theme</h4>
            <p>
              A structured comparative analysis of heritage-based
              pedagogical traditions and contemporary AI-driven
              educational ecosystems.
            </p>

            <div className="ft-badge">
              Academic Year 2026
            </div>
          </div>

        </div>

        <div className="ft-bottom">
          © 2026 Project — Built for Academic & Research Purposes
        </div>

      </div>

    </footer>
  );
}