import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TermsConditions from "./components/Term";
import Home from "./pages/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import GDPRConsent from "./components/GDPRButton";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Terms & Privacy with ScrollToTop wrapper */}
        <Route
          path="/terms-conditions"
          element={
            <ScrollToTop>
              <TermsConditions />
            </ScrollToTop>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <ScrollToTop>
              <PrivacyPolicy />
            </ScrollToTop>
          }
        />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
