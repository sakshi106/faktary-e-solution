
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar  from "../components/Navbar/Navbar";
import About from "../pages/About/About";
import Contact from "../pages/contact/contact";
import Footer from "../components/Footer/Footer";
import Resources from "../pages/Resources/Resources";
import AdminPanel from "../components/Admin/AdminPanel";
import ReachUs from "../pages/ReachUs/ReachUs";
import Service from "../pages/Service/Service";
import Webdev from "../pages/Service/Webdev";
import EcomDetails from "../pages/Service/Ecom";
import DigitalMarketingDetails from "../pages/Service/Marketing";
import ITSupportDetails from "../pages/Service/It";
import BrandingDetails from "../pages/Service/digitaldesign";


function App() { 
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<About/>}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/reach" element={<ReachUs />} />
        <Route path="/webdev" element={<Webdev />} />
        <Route path="/Ecom" element={<EcomDetails />} />
        <Route path="/marketing" element={<DigitalMarketingDetails />} />
        <Route path="/it-support" element={<ITSupportDetails />} />
        <Route path="/digital" element={<BrandingDetails />} />
        
        
        
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
