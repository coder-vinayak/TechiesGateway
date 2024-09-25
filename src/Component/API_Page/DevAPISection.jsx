import React from "react";
import DevAPISecBg from "../../assets/API_page/bg-dev-api-section.png";
import DevAPISecImg2 from "../../assets/API_page/dev-api-sec-img2.png";
import SectionHead from "./SectionHead";

function DevAPISection() {
  return (
    <div className="dev-api-sec-wrapper">
      <SectionHead
        t1="Developer-Friendly API"
        t2="Easy Integration with POST Requests"
        t3="Easily integrate with our API using POST requests. JSON response format and PHP code examples included."
      />

      <section className="dasw-body">
        <div className="dasw-body-sec-1">
          <table>
            <tr>
              <td>HTTP Method </td>
              <td>-</td>
              <td>POST</td>
            </tr>
            <tr>
              <td>API URL</td>
              <td>-</td>
              <td>https://smmpanel.com/api/s2</td>
            </tr>
            <tr>
              <td>Response format</td>
              <td>-</td>
              <td>JSON</td>
            </tr>
            <tr>
              <td>Example codes</td>
              <td>-</td>
              <td id="code">Example of PHP code</td>
            </tr>
          </table>
        </div>
        <div className="dasw-body-sec-2">
          <img src={DevAPISecImg2} alt="" />
        </div>
      </section>
    </div>
  );
}

export default DevAPISection;
