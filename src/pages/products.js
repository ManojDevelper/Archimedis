import React from "react";
import Pbanner from "./Products/pbanner";
import Pharmaceutical from "./Products/pharmaceutical";
import Foodsupplements from "./Products/foodsupplements";
import Archibranded from "./Products/archibranded";
import Online from "./Home/online";
import Contact from "./Home/contact";
import Footer from "./Home/footer";

const Products = () => {
  return (
    <>
      <div id="products">
        <Pbanner />
        <Pharmaceutical />
        <Foodsupplements />
        <Archibranded />
        <Online />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Products;
