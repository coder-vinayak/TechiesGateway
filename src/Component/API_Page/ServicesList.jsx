import React from "react";
import SectionHead from "./SectionHead";
import Accordion from "./AccordionExpandDefault";

function ServicesList() {
  return (
    <div className="services-list-wrapper">
      <SectionHead
        t1="Services List"
        t2="Unlock Efficiency with API-Integrated Services"
        t3="Boost efficiency with our seamless API integration for faster, streamlined services."
      />
      <Accordion />
    </div>
  );
}

export default ServicesList;
