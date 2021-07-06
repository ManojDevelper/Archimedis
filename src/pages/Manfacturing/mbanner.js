import React from "react";
import "../../styles/Manfacture/MBanner.css";
import Nav from "../nav";
import Top2 from "../../components/Taketop";
import { graphql, useStaticQuery } from "gatsby";

const MBanner = () => {
    return (
        <> <Nav />
            <div id="mbanner">
                <div id="mbanner_container">
               
                </div>
            </div>
            <Top2 link="/manfacture/" />
        </>
    );
};
export default MBanner;