import React from "react";
import "../../styles/Home/Online.css";
// import arrow from "../../images/arow.svg";
import { graphql, useStaticQuery } from "gatsby";

const Online = () => {
    return (
        <>
            <div id="online">
                <div id="online_container">
                    <div id="online_container_block1">
                        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaa</p>
                        {/* <button>Comming Soon<img src={arrow} alt="img" /></button> */}
                        <h1 id="onlinebutton">Coming Soon...</h1>
                    </div>
                    <div id="online_container_block1">
                        <img src="" alt="img" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Online;