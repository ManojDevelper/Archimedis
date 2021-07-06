import React from "react";
import MBanner from "./Manfacturing/mbanner";
import Capable from "./Manfacturing/capable";
import Quality from "./Manfacturing/quality";
import Qualityassurance from "./Manfacturing/qualityassurance";
import Facility from "./Manfacturing/facility";
import Industry from "./Manfacturing/industry";
import Contact from "./Home/contact";
import Footer from "./Home/footer";
import "../styles/Manfacturing.css";

const Manfacturing = () => {
  return (
    <>
      <div id="manfacturing">
        <MBanner />
        <Capable />
        <Quality />
        <Qualityassurance />
        <Facility />
        <Industry />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Manfacturing;
