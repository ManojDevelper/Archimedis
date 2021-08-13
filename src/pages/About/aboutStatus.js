import React from "react";
import "../../styles/About/Aboutstatus.css";
import b1 from "../../data/assets/about_status_1.svg";
import b2 from "../../data/assets/about_status_2.svg";

const Aboutstatus = () => {
  return (
    <>
      <div id="aboutstatus">
        <div id="aboutstatus_container">
          <div id="aboutstatus_container_block1">
            <img src={b1} alt="img" />
            <h1>Vision</h1>
            <p>To make superior quality healthcare product affordable and available globally</p>
          </div>
          <div id="aboutstatus_container_block1">
            <img src={b2} alt="img" />
            <h1>Mission</h1>
            <p>To further enhance human life by consistently formulating scientific innovations into superior quality and affordable healthcare products. </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Aboutstatus;
