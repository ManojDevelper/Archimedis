import React from "react";
import "../../styles/Manfacture/Industry.css";
import { graphql, useStaticQuery } from "gatsby";

const Industry = () => {

    return (
        <>
          
                <div id="industry">

                    <div id="industry_container">
               
                            <>
                                <div className="industry_container_cards" >
                                    <div id="industry_container_cards_block1">
                                        <div id="industry_container_cards_matter">
                                            <h1 id="c_c_title"></h1>
                                            <p id="c_c_matter"></p>
                                        </div>
                                    </div>
                                    <div id="industry_container_cards_block2">
                                     
                                    </div>
                                </div>
                            </>
              
                    </div>
                </div>
          
        </>
    );
};
export default Industry;