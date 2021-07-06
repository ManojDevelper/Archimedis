import React from "react";
import Dbanner from "./Digital/dbanner";
import Dsolutions from "./Digital/dsolutions";
import Productdev from "./Digital/productdev";
import Contact from "./Home/contact";
import Footer from "./Home/footer";
import "../styles/Digital.css"

const Digital = () => {
    return (
        <>
            <div id="digital">
                <Dbanner />
                <Dsolutions />
                <Productdev />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default Digital;
