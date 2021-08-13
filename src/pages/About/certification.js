import React from "react";
import "../../styles/About/Certifications.css";
import b1 from "../../data/assets/about_certi1.svg";
import b2 from "../../data/assets/about_certi2.svg";
import b3 from "../../data/assets/about_certi3.svg";

const Certification = () => {
  return (
    <>
      <div id="Certifications">
        <h1>Certifications</h1>
        <div id="Certifications_container">
          <div id="Certifications_container_block1">
            <img src={b1} alt="img" />
          </div>
          <div id="Certifications_container_block1">
            <img src={b2} alt="img" />
          </div><div id="Certifications_container_block1">
            <img src={b3} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Certification;
