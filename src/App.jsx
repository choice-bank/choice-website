import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import ApiBanking from "./pages/APIBanking/ApiBanking";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/api-banking" element={<ApiBanking />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
