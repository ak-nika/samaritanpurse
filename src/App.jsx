import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import HistoryPage from "./pages/History";
import FaithPage from "./pages/Faith";
import FestivalsPage from "./pages/Festivals";
import BiographyPage from "./pages/Biography";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/faith" element={<FaithPage />} />
        <Route path="/festivals" element={<FestivalsPage />} />
        <Route path="/biography" element={<BiographyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
