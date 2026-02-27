import { useState, useEffect } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "mindmap", "comparison", "philosophy", "timeline"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        <div className="brand">
          KhanArslan <span>IKS</span>
        </div>

        <nav className="menu">
          <a href="/" onClick={scrollToTop} className={active === "hero" ? "active" : ""}>
            Hero
          </a>
          <a href="#mindmap" className={active === "mindmap" ? "active" : ""}>Mind Map</a>
          <a href="#comparison" className={active === "comparison" ? "active" : ""}>Comparison</a>
          <a href="#philosophy" className={active === "philosophy" ? "active" : ""}>Philosophy</a>
          <a href="#timeline" className={active === "timeline" ? "active" : ""}>Timeline</a>
        </nav>

      </div>
    </header>
  );
}