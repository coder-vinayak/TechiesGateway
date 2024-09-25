import React from "react";
import Hero from "../API_Page/Hero";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import DevAPISection from "../API_Page/DevAPISection";
import ServicesList from "../API_Page/ServicesList";

function API() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DevAPISection />
      <ServicesList />
      <Footer />
    </div>
  );
}

export default API;
