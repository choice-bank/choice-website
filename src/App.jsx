import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import ApiBanking from "./pages/APIBanking/ApiBanking";
import logo from "./assets/logo.png";
import PrivateBanking from "./pages/PrivateBanking/PrivateBanking";
import ContactUs from "./pages/ContactUs/ContactUs";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <Navbar logo={logo} />
      <ScrollToTop />{" "}
      {/* ScrollToTop component to scroll to top on route change */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/private-banking" element={<PrivateBanking />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/api-banking" element={<ApiBanking />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
