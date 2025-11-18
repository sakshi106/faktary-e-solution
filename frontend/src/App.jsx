import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import About from "../pages/About/About";
import Contact from "../pages/contact/contact";
import Footer from "../components/Footer/Footer";
import Resources from "../pages/Resources/Resources";
import ReachUs from "../pages/ReachUs/ReachUs";
import Service from "../pages/Service/Service";
import Webdev from "../pages/Service/Webdev";
import EcomDetails from "../pages/Service/Ecom";
import DigitalMarketingDetails from "../pages/Service/Marketing";
import ITSupportDetails from "../pages/Service/It";
import BrandingDetails from "../pages/Service/digitaldesign";
import ScrollToTop from "../components/SCROLLTOP/ScrollToTop";

// Admin imports
// import AdminPanel from "../pages/Admin/AdminPanel";
// import Login from "../pages/Admin/Login";
// import ProtectedRoute from "../pages/Admin/ProtectedRoute";  ✅ Must create this file
// import ContributorPanel from "../pages/Admin/ContributorsPanel";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reach" element={<ReachUs />} />
        <Route path="/websitemobile" element={<Webdev />} />
        <Route path="/Ecom" element={<EcomDetails />} />
        <Route path="/marketing" element={<DigitalMarketingDetails />} />
        <Route path="/it" element={<ITSupportDetails />} />
        <Route path="/digitaldesign" element={<BrandingDetails />} />

       
      </Routes>

      <Footer />
    </>
  );
}

export default App;
