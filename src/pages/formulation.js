import React from "react";
import Nav from "./nav";
import Fbanner from "./Formulation/fbanner";
import Fservice from "./Formulation/fservice";
import Ffacility from "./Formulation/ffacility";
import Casestudy from "./Formulation/casestudy";
import Contact from "./Home/contact";
import Footer from "./Home/footer";
import "../styles/Formulation/Formulation.css";

const Formulation = () => {
  return (
    <>
      <div id="formulation">
        <Nav />
        <Fbanner />
        <Fservice />
        <Ffacility />
        <Casestudy />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Formulation;
