import React from "react";

function SectionHead(props) {
  return (
    <div>
      <section className="section-head-wrapper">
        <p className="section-head-wrapper-text-1">{props.t1}</p>
        <p className="section-head-wrapper-text-2">{props.t2}</p>
        <p className="section-head-wrapper-text-3">{props.t3}</p>
      </section>
    </div>
  );
}

export default SectionHead;
