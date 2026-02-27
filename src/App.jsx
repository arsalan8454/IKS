import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {

  useEffect(() => {
    if (window.innerWidth > 1024) {
      alert(
        "For the best experience, please view this project on a laptop or desktop device."
      );
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;